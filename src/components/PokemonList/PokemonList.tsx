import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useGetPokemons } from '../../hooks/useGetPokemons';
import PokemonCard from '../PokemonCard/PokemonCard';
import Grid from '@mui/material/Grid';
import SearchBox from '../SearchBox/SearchBox';

export const PokemonList = () => {
  const classes = useStyles();
  const { pokemons, loading } = useGetPokemons();
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <span>Pokemons</span>
        <span className={classes.searchBoxContainer}>
        <SearchBox onSearch={handleSearch} />
        </span>
      </div>
      <div className={classes.container}>
        {loading && <div>Loading...</div>}
        <Grid container spacing={2}>
          {pokemons
            .filter((pkmn) =>
              pkmn.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((pkmn, i) => (
              <Grid item xs={3} key={pkmn.id}>
                <PokemonCard
                  id={pkmn.id}
                  serialNumber={parseInt(pkmn.number)}
                  key={pkmn.id}
                  image={pkmn.image}
                  name={pkmn.name}
                  types={pkmn.types.join(',')}
                />
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      padding: '32px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    header: {
      marginBottom: '16px',
      width: '100%',
      textAlign: 'left',
      fontSize: '24px',
      fontWeight: 'bold',
      zIndex: 10,
      height: '60px',
      lineHeight: '50px',
    },
    container: {
      flexGrow: 1,
      overflowY: 'auto',
    },
    searchBoxContainer: {
      width: '300px',
      float: 'right',
    }
  },
  { name: 'PokemonList' }
);

import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { createUseStyles } from 'react-jss';
import { useNavigate } from 'react-router-dom';

interface PokemonCardProps {
  id: string;
  serialNumber: number;
  image: string;
  name: string;
  types: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  id,
  serialNumber,
  image,
  name,
  types,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handlePokemonClick = () => {  
    navigate(`/pokemon/${id}/${name}`);
  }
  return (
    <PokemonCardWrapper onClick={handlePokemonClick}>
      <div className={classes.title}>
        <Typography variant="body1">{`${serialNumber}. ${name}`}</Typography>
      </div>
      <div className={classes.divider}></div>
      <Grid container spacing={2} mt={'6px'}>
        <Grid item md={4} xs={12}>
          <img src={image} alt={name} className={classes.pokemonImage} />
        </Grid>
        <Grid item md={8} xs={12}>
          <div>
            <Typography variant="caption" className={classes.subTitle}>
              Type:{' '}
              <Typography variant="caption" className={classes.typeValue}>
                {types}
              </Typography>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </PokemonCardWrapper>
  );
};

const PokemonCardWrapper = styled(Card)(({ theme }) => ({
  margin: 'auto',
  backgroundColor: '#2A3345',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.15)',
  '&:hover': {
    backgroundColor: '#1A2432',
    transform: 'scale(1.05)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  },
  cursor: 'pointer',
  padding: theme.spacing(2),
}));

const useStyles = createUseStyles(
  {
    title: {
      fontWeight: 'bold',
      color: '#ffffff',
      textAlign: 'left',
      fontSize: '16px',
    },
    pokemonImage: {
      width: '100px',
      height: '100px',
      borderRadius: '8px',
    },
    subTitle: {
      color: '#B0B0B0',
      textAlign: 'left',
      fontWeight: 'bold',
      fontSize: '14px',
    },
    typeValue: {
      color: '#ffffff',
      textAlign: 'left',
      fontWeight: 'bold',
      fontSize: '14px',
    },
    divider: {
      border: 'none',
      height: '1px',
      background:
        'linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3))',
      margin: '2px 0',
    },
  },
  { name: 'PokemonList' }
);

export default PokemonCard;

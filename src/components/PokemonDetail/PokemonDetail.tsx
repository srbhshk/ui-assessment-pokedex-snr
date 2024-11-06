import React, { useState } from 'react';
import { Modal, Box, Typography, Stack, Grid } from '@mui/material';
import { createUseStyles } from 'react-jss';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetPokemonDetails } from '../../hooks/useGetPokemonDetails';

export const PokemonDetail: React.FC = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  let { id } = useParams<string>();
  let { name } = useParams<string>();
  const navigate = useNavigate();
  const { pokemon, loading } = useGetPokemonDetails(
    id ? id : '',
    name ? name : ''
  );
  console.log(pokemon);
  return (
    <Modal open={isOpen} className={classes.modalContainer}>
      <Box className={classes.modalContent}>
        {/* Header Section */}
        <Box className={classes.header}>
          <Typography variant="h6" className={classes.title}>
            <div className={classes.headerText}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <span
                  className={`material-icons-round ${classes.backIcon}`}
                  color="#1976d2"
                  onClick={() => navigate("/pokemon")}
                >
                  keyboard_backspace
                </span>{' '}
                <Typography variant="body1"> {name}</Typography>
              </Stack>
            </div>
          </Typography>
        </Box>

        {/* Content Section */}
        <Box className={classes.content}>
          {loading && <div>Loading...</div>}

          {pokemon && (
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <img
                  src={pokemon.image}
                  alt={pokemon.name}
                  className={classes.pokemonImage}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">{pokemon.name}</Typography>
                <div>
                  <Typography variant="caption">
                    <span
                      className={classes.subTitle}
                    >{`Classification : `}</span>
                    <span className={classes.typeValue}>
                      {pokemon.classification}
                    </span>
                  </Typography>
                </div>
                <div>
                  <Typography variant="caption">
                    <span className={classes.subTitle}>{`Number : `}</span>
                    <span className={classes.typeValue}>{pokemon.number}</span>
                  </Typography>
                </div>
                <div>
                  <Typography variant="caption">
                    <span className={classes.subTitle}>{`Max CP : `}</span>
                    <span className={classes.typeValue}>{pokemon.maxCP}</span>
                  </Typography>
                </div>
                <div>
                  <Typography variant="caption">
                    <span className={classes.subTitle}>{`Max HP : `}</span>
                    <span className={classes.typeValue}>{pokemon.maxHP}</span>
                  </Typography>
                </div>
                <div>
                  <Typography variant="caption">
                    <span className={classes.subTitle}>{`Flee Rate : `}</span>
                    <span className={classes.typeValue}>
                      {pokemon.fleeRate}
                    </span>
                  </Typography>
                </div>
                <div>
                  <Typography variant="caption">
                    <span className={classes.subTitle}>{`Weight : `}</span>
                    <span className={classes.typeValue}>
                      {pokemon.weight.minimum} - {pokemon.weight.maximum}
                    </span>
                  </Typography>
                </div>
                <div>
                  <Typography variant="caption">
                    <span className={classes.subTitle}>{`Height : `}</span>
                    <span className={classes.typeValue}>
                      {pokemon.height.minimum} - {pokemon.height.maximum}
                    </span>
                  </Typography>
                </div>
                <div>
                  <Typography variant="caption">
                    <span className={classes.subTitle}>{`Types : `}</span>
                    <span className={classes.typeValue}>
                      {pokemon.types.join(', ')}
                    </span>
                  </Typography>
                </div>
                <div>
                  <Typography variant="caption">
                    <span className={classes.subTitle}>{`Resistant : `}</span>
                    <span className={classes.typeValue}>
                      {pokemon.resistant.join(', ')}
                    </span>
                  </Typography>
                </div>
                <div>
                  <Typography variant="caption">
                    <span className={classes.subTitle}>{`Weaknesses : `}</span>
                    <span className={classes.typeValue}>
                      {pokemon.weaknesses.join(', ')}
                    </span>
                  </Typography>
                </div>
              </Grid>
            </Grid>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

const useStyles = createUseStyles({
  modalContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    width: '60%',
    backgroundColor: '#171E2b',
    borderRadius: '8px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.5)',
    color: '#FFFFFF',
    overflow: 'hidden',
  },
  header: {
    padding: '16px 24px',
    backgroundColor: '#1C2534',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
  title: {
    fontSize: '18px',
    fontWeight: 500,
    color: '#FFFFFF',
  },
  closeButton: {
    color: '#FFFFFF',
  },
  content: {
    padding: '24px',
    maxHeight: '400px',
    overflowY: 'auto',
    color: '#B0BEC5',
  },
  headerText: {
    fontSize: '18px',
    verticalAlign: 'middle',
  },
  backIcon: {
    color: '#1976d2',
    cursor: 'pointer',
  },
  pokemonImage: {
    borderRadius: '8px',
  },
  subTitle: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '14px',
    color: '#B0B0B0',
  },
  typeValue: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '14px',
    color: '#ffffff',
  },
});


import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PokemonCard from './PokemonCard'; // Adjust the path to the component
import { BrowserRouter as Router } from 'react-router-dom';

// Mock useNavigate hook from react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('PokemonCard Component', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    // Reset mock before each test
    mockNavigate.mockClear();
  });

  it('should render the PokemonCard component correctly', () => {
    render(
      <Router>
        <PokemonCard
          id="1"
          serialNumber={1}
          image="https://pokeapi.co/media/sprites/pokemon/1.png"
          name="Bulbasaur"
          types="Grass/Poison"
        />
      </Router>
    );

    // Check if the name is rendered
    expect(screen.getByText('1. Bulbasaur')).toBeTruthy();

    // Check if the type is rendered
    expect(screen.getByText(/Type:/)).toBeTruthy();
    expect(screen.getByText('Grass/Poison')).toBeTruthy();

    // Check if the image is rendered correctly
    const image = screen.getByAltText('Bulbasaur');
    expect(image).toBeTruthy();
    expect(image).toHaveProperty('src', 'https://pokeapi.co/media/sprites/pokemon/1.png');
  });

  it('should navigate to the correct route when the card is clicked', () => {
    // Mock implementation of useNavigate
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockImplementation(() => mockNavigate);

    render(
        <PokemonCard
          id="1"
          serialNumber={1}
          image="https://pokeapi.co/media/sprites/pokemon/1.png"
          name="Bulbasaur"
          types="Grass/Poison"
        />
    );

    const pokemonCard = screen.getByAltText('Bulbasaur'); // You can use role="button" for clickable components
    fireEvent.click(pokemonCard);

    // Check if navigate was called with the correct URL
    expect(mockNavigate).toHaveBeenCalledWith('/pokemon/1/Bulbasaur');
  });
});

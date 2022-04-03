import { Pokemons } from 'constants/Data';
import { PokemonType } from '../types';

const ColorMap = {
  Normal: '#998f6e',
  Bug: '#9baa2f',
  Dark: '#614939',
  Dragon: '#623d79',
  Electric: '#f2b335',
  Fairy: '#dd9aa5',
  Fight: '#964c32',
  Fire: '#e75535',
  Flying: '#8b98ae',
  Ghost: '#596090',
  Grass: '#72b651',
  Ground: '#c8a74f',
  Ice: '#4fbcb6',
  Poison: '#a05781',
  Psychic: '#e1697c',
  Rock: '#a28842',
  Steel: '#99938d',
  Water: '#477b92',
};

export default function getPokemonBackground(
  idOrType: number | PokemonType,
): string {
  if (typeof idOrType !== 'number') {
    return ColorMap[idOrType];
  }

  const pokemon = Pokemons[idOrType];
  const type = pokemon.types[0] ?? PokemonType.Normal;

  return ColorMap[type];
}

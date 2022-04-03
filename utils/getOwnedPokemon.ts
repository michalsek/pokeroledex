import { Trainer } from '../types';
import getDataPath from './getDataPath';

export default function getOwnedPokemmon(trainer: Trainer, id: number) {
  const index = trainer.pokemonsOwned.findIndex((poke) => poke.number === id);
  const characterPath = getDataPath('pokemonsOwned', `${index}`);

  return {
    index,
    characterPath,
    pokemon: trainer.pokemonsOwned[index],
  };
}

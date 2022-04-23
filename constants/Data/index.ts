import { Trainer, Rank } from '../../types';

export { default as Pokemons } from './pokemons';
export { default as Moves } from './moves';

export const EmptyTrainer: Trainer = {
  name: '',
  rank: Rank.Starter,
  age: 0,
  player: '',
  concept: '',
  nature: '',
  confidence: 0,
  money: 0,
  maxHP: 0,
  actualHP: 0,
  maxWill: 0,
  actualWill: 0,
  pokemonsOwned: [],
  attributes: {
    strength: 0,
    dexterity: 0,
    vitality: 0,
    insight: 0,
  },
  socialAttributes: {
    tough: 0,
    cool: 0,
    beauty: 0,
    clever: 0,
    cute: 0,
  },
  skills: {
    fight: {
      brawl: 0,
      throw: 0,
      evasion: 0,
      weapons: 0,
    },
    survival: {
      alert: 0,
      athletic: 0,
      nature: 0,
      stealth: 0,
    },
    social: {
      allure: 0,
      etiquette: 0,
      intimidate: 0,
      perform: 0,
    },
    knowledge: {
      crafts: 0,
      lore: 0,
      medicine: 0,
      science: 0,
    },
    extra: {},
  },
  pokemons: {
    caught: 0,
    seen: 0,
  },
  badges: [],
  achievements: [],
};

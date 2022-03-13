import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Meta: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Trainer: undefined;
  Items: undefined;
  SocialLinks: undefined;
  Pokemons: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export enum Rank {
  Starter = 'Starter',
  Begginer = 'Begginer',
  Amateur = 'Amateur',
  Ace = 'Ace',
  Pro = 'Pro',
  Master = 'Master',
  Champion = 'Champion',
}

export enum EvolutionTime {
  Fast = 5,
  Medium = 15,
  Slow = 45,
}

export interface Attributes {
  strength: number;
  dexterity: number;
  vitality: number;
  insight: number;
}

export interface SocialAttributes {
  tough: number;
  cool: number;
  beauty: number;
  clever: number;
  cute: number;
}

export interface Skills {
  fight: {
    brawl: number;
    throw: number;
    evasion: number;
    weapons: number;
  };
  survival: {
    alert: number;
    athletic: number;
    nature: number;
    stealth: number;
  };
  social: {
    allure: number;
    etiquette: number;
    intimidate: number;
    perform: number;
  };
  knowledge: {
    crafts: number;
    lore: number;
    medicine: number;
    science: number;
  };
  extra: {
    [key: string]: number;
  };
}

export interface Trainer {
  /* Strings */
  name: string;
  player: string;
  concept: string;
  nature: string;

  /* Numbers */
  age: number;
  confidence: number;
  money: number;

  /* Connected Numbers */
  maxHP: number;
  actualHP: number;
  maxWill: number;
  actualWill: number;

  /* Other */
  rank: Rank;
  skills: Skills;
  badges: string[];
  achievements: string[];
  attributes: Attributes;
  socialAttributes: SocialAttributes;
  pokemons: {
    caught: number;
    seen: number;
  };
  pokemonsOwned: OwnedPokemon[];
}

export interface OwnedPokemon {
  number: number;
  attributes: Attributes;
  socialAttributes: SocialAttributes;
  skills: Skills;
  happiness: number;
  loyalty: number;
  battleNumber: number;
  victories: number;
  maxHP: number;
  maxWill: number;
  rank: Rank;
  nature: string;
  confidence: number;
  accessory: string;
  moves: number[];
}

export enum PokemonType {
  Normal = 'Normal',
  Bug = 'Bug',
  Dark = 'Dark',
  Dragon = 'Dragon',
  Electric = 'Electric',
  Fairy = 'Fairy',
  Fight = 'Fight',
  Fire = 'Fire',
  Flying = 'Flying',
  Ghost = 'Ghost',
  Grass = 'Grass',
  Ground = 'Ground',
  Ice = 'Ice',
  Poison = 'Poison',
  Psychic = 'Psychic',
  Rock = 'Rock',
  Steel = 'Steel',
  Water = 'Water',
}

export enum AttackType {
  Physical = 'Physical',
  Special = 'Special',
  None = 'None',
}

export interface SkillPath {
  group: keyof Skills;
  name:
    | keyof Skills['fight']
    | keyof Skills['knowledge']
    | keyof Skills['social']
    | keyof Skills['survival'];
}

export enum MoveEffectType {
  Damaging = 'Damaging',
  NonDamaging = 'NonDamaging',
  WeightLoss = 'WeightLoss',
  NoEscape = 'NoEscape',
}

export interface MoveEffect {
  type: MoveEffectType;
  values?: (number | string)[];
}

export interface PokemonMove {
  id: number;
  type: PokemonType;
  name: string;
  power: number;
  attackType: AttackType;
  accuracy: [SkillPath, SkillPath];
  damagePool?: {
    skill: SkillPath;
    modifier: number;
  };
  effects: MoveEffect[];
  effecstDescription: string;
  description: string;
}

export interface Ability {
  name: string;
}

export interface Pokemon {
  number: number;
  name: string;
  type: PokemonType;
  height: number;
  weight: number;
  rank: Rank;
  descriptionTitle: string;
  description: string;
  startingAttributes: Attributes;
  maxAttributes: Attributes;
  baseHP: number;
  suggestedRank: Rank;
  abilities: Ability[];
  evolutionStage: number;
  evolutions: number[];
  possibleMoves: number[];
}

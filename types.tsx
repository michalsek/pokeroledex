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

export interface PokemonAttributes {
  strength: number;
  dexterity: number;
  vitality: number;
  insight: number;
  special: number;
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
  attributes: PokemonAttributes;
  socialAttributes: SocialAttributes;
  skills: Skills;
  happiness: number;
  loyalty: number;
  battleNumber: number;
  victories: number;
  actualHP: number;
  actualWill: number;
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
  Support = 'Support',
}

export type SkillPath = [
  keyof Skills,
  (
    | keyof Skills['fight']
    | keyof Skills['knowledge']
    | keyof Skills['social']
    | keyof Skills['survival']
  ),
];

export type RollPath =
  | SkillPath
  | keyof PokemonAttributes
  | keyof SocialAttributes;

export enum MoveTarget {
  User = 'User',
  OneAlly = 'OneAlly',
  UserAndAllies = 'UserAndAllies',
  Foe = 'Foe',
  RandomFoe = 'RandomFole',
  AllFoes = 'AllFoes',
  Area = 'Area',
  Battlefield = 'Battlefield',
}

export enum MoveEffectType {
  Damaging = 'Damaging',
  NonDamaging = 'NonDamaging',
  WeightLoss = 'WeightLoss',
  NoEscape = 'NoEscape',
}

export enum EvolutionStage {
  First = 'First',
  Second = 'Second',
  Final = 'Final',
  MegaEvolution = 'MegaEvolution',
}

export interface MoveEffect {
  type: MoveEffectType;
  values?: (number | string)[];
}

export interface PokemonMove {
  id: string;
  type: PokemonType;
  name: string;
  power: number;
  attactType: AttackType;
  effectChanceDices?: number;
  isAlwaysAffected?: boolean;
  isNeverAffected?: boolean;
  accuracyReduce?: number;
  target?: MoveTarget;
  traitBuff?: {
    name: keyof PokemonAttributes;
    by: number;
  };
  traitDebuff?: {
    name: keyof PokemonAttributes;
    by: number;
  };
  damageMdif?: '1d' | '2d' | '3d' | '4d' | '5d' | '6d' | number;
  accuracyRoll?: RollPath[];
  damageRoll?: RollPath[];
  effects?: string[];
  effectDescription?: string;
  description: string;
}

export interface Ability {
  name: string;
}

export interface Pokemon {
  number: number;
  name: string;
  types: PokemonType[];
  height: number;
  weight: number;
  rank: Rank;
  descriptionTitle: string;
  description: string;
  startingAttributes: PokemonAttributes;
  maxAttributes: PokemonAttributes;
  baseHP: number;
  abilities: string[];
  evolutionStage: EvolutionStage;
  evolutions: number[];
  possibleMoves: string[];
}

export interface PokemonMap {
  [key: number]: Pokemon;
}

export interface MoveMap {
  [key: string]: PokemonMove;
}

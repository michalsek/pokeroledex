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
  Pokemons: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export enum Rank {
  Starter = 'Starter',
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
  pokemonsOwned: Pokemon[];
}

export interface Pokemon {
  number: number;
  attributes: Attributes;
  socialAttributes: SocialAttributes;
  skills: Skills;
  happiness: number;
  loyalty: number;
  battleNumber: number;
  victories: number;
  maxHp: number;
  maxWill: number;
  rank: Rank;
  nature: string;
  confidence: number;
  accessory: string;
  moves: number[];
}

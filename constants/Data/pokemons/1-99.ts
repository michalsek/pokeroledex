import {
  EvolutionStage,
  EvolutionTime,
  Pokemon,
  PokemonMap,
  PokemonType,
  Rank,
} from '../../../types';

// blank -starter
// normal - begginer
// blue - amateur
// gold - ace
// red - pro
// masterball - master :)
// yellow - champion

const pokemons: PokemonMap = {
  '001': {
    id: '001',
    number: 1,
    name: 'Bulbasaur',
    types: [PokemonType.Grass, PokemonType.Poison],
    height: 0.7,
    weight: 7,
    rank: Rank.Begginer,
    descriptionTitle: 'Seed Pokemon',
    description:
      'It carries a seed on its back since birth. As it grows older the seed also grows larger. It is known to be a well-behaved and loyal Pokémon, but pretty rare to find in the wild.',
    startingAttributes: {
      strength: 2,
      dexterity: 2,
      vitality: 2,
      special: 2,
      insight: 2,
    },
    maxAttributes: {
      strength: 4,
      dexterity: 4,
      vitality: 4,
      special: 4,
      insight: 4,
    },
    baseHP: 3,
    abilities: ['overgrow'],
    evolutionStage: EvolutionStage.First,
    evolutionType: EvolutionTime.Medium,
    evolutions: ['001', '002', '003'],
    possibleMoves: [
      { rank: Rank.Starter, move: 'tackle' },
      { rank: Rank.Starter, move: 'growl' },
      { rank: Rank.Begginer, move: 'leech-seed' },
      { rank: Rank.Begginer, move: 'vine-whip' },
      { rank: Rank.Amateur, move: 'poison-powder' },
      { rank: Rank.Amateur, move: 'sleep-powder' },
      { rank: Rank.Amateur, move: 'take-down' },
      { rank: Rank.Amateur, move: 'razor-leaf' },
      { rank: Rank.Amateur, move: 'sweet-scent' },
      { rank: Rank.Amateur, move: 'growth' },
      { rank: Rank.Ace, move: 'worry-seed' },
      { rank: Rank.Ace, move: 'double-edge' },
      { rank: Rank.Ace, move: 'synthesis' },
      { rank: Rank.Pro, move: 'solar-beam' },
      { rank: Rank.Pro, move: 'grassy-terrain' },
      { rank: Rank.Pro, move: 'amnesia' },
      { rank: Rank.Pro, move: 'grass-pledge' },
    ],
  },
  '002': {
    id: '002',
    number: 2,
    name: 'Ivysaur',
    types: [PokemonType.Grass, PokemonType.Poison],
    height: 1,
    weight: 25,
    rank: Rank.Amateur,
    descriptionTitle: 'Seed Pokemon',
    description:
      'There is a bud on this Pokémon’s back. To support its weight, Ivysaur’s legs and trunk grow thick and strong. It becomes kind of a loner after evolving and may stray away from its group to take sunbaths.',
    startingAttributes: {
      strength: 2,
      dexterity: 2,
      vitality: 2,
      special: 2,
      insight: 2,
    },
    maxAttributes: {
      strength: 4,
      dexterity: 4,
      vitality: 4,
      special: 5,
      insight: 5,
    },
    baseHP: 4,
    abilities: ['overgrow'],
    evolutionStage: EvolutionStage.Second,
    evolutionType: EvolutionTime.Medium,
    evolutions: ['001', '002', '003'],
    possibleMoves: [
      { rank: Rank.Starter, move: 'tackle' },
      { rank: Rank.Starter, move: 'growl' },
      { rank: Rank.Begginer, move: 'leech-seed' },
      { rank: Rank.Begginer, move: 'vine-whip' },
      { rank: Rank.Amateur, move: 'poison-powder' },
      { rank: Rank.Amateur, move: 'sleep-powder' },
      { rank: Rank.Amateur, move: 'take-down' },
      { rank: Rank.Amateur, move: 'razor-leaf' },
      { rank: Rank.Amateur, move: 'sweet-scent' },
      { rank: Rank.Amateur, move: 'growth' },
      { rank: Rank.Ace, move: 'double-edge' },
      { rank: Rank.Ace, move: 'warry-seed' },
      { rank: Rank.Ace, move: 'synthesis' },
      { rank: Rank.Ace, move: 'solar-beam' },
      { rank: Rank.Pro, move: 'grassy-terrain' },
      { rank: Rank.Pro, move: 'amnesia' },
      { rank: Rank.Pro, move: 'grass-pledge' },
    ],
  },
  '003': {
    id: '003',
    number: 3,
    name: 'Venusaur',
    types: [PokemonType.Grass, PokemonType.Poison],
    height: 2,
    weight: 200,
    rank: Rank.Ace,
    descriptionTitle: 'Seed Pokémon',
    description:
      'Venusaur’s flower is said to take on vivid colors if it gets plenty of sun light. The flower’s aroma soothes the emotions of others. If you find one in the wild, it must be the protector of the area.',
    startingAttributes: {
      strength: 2,
      dexterity: 2,
      vitality: 2,
      special: 3,
      insight: 3,
    },
    maxAttributes: {
      strength: 5,
      dexterity: 5,
      vitality: 5,
      special: 6,
      insight: 6,
    },
    baseHP: 5,
    abilities: ['overgrow'],
    evolutionStage: EvolutionStage.Final,
    evolutionType: '',
    evolutions: ['001', '002', '003'],
    possibleMoves: [
      { rank: Rank.Starter, move: 'tackle' },
      { rank: Rank.Starter, move: 'growl' },
      { rank: Rank.Begginer, move: 'leech-seed' },
      { rank: Rank.Begginer, move: 'vine-whip' },
      { rank: Rank.Amateur, move: 'poison-powder' },
      { rank: Rank.Amateur, move: 'sleep-powder' },
      { rank: Rank.Amateur, move: 'take-down' },
      { rank: Rank.Amateur, move: 'razor-leaf' },
      { rank: Rank.Amateur, move: 'sweet-scent' },
      { rank: Rank.Amateur, move: 'growth' },
      { rank: Rank.Amateur, move: 'double-edge' },
      { rank: Rank.Amateur, move: 'petal-dance' },
      { rank: Rank.Amateur, move: 'warry-seed' },
      { rank: Rank.Ace, move: 'synthesis' },
      { rank: Rank.Ace, move: 'petal-blizzard' },
      { rank: Rank.Ace, move: 'solar-beam' },
      { rank: Rank.Pro, move: 'outrage' },
      { rank: Rank.Pro, move: 'curse' },
      { rank: Rank.Pro, move: 'frenzy-plant' },
    ],
  },
  '004': {
    id: '004',
    number: 4,
    name: 'Charmander',
    types: [PokemonType.Fire],
    height: 0.6,
    weight: 8,
    rank: Rank.Begginer,
    descriptionTitle: 'Lizard Pokemon',
    description:
      'A rare Pokémon. The flame on its tail is an indicator of its feelings and life force. If it is healthy and happy, the flame burns brightly. It needs proper care and discipline or else it may rebel later on.',
    startingAttributes: {
      strength: 2,
      dexterity: 2,
      vitality: 1,
      special: 2,
      insight: 2,
    },
    maxAttributes: {
      strength: 4,
      dexterity: 4,
      vitality: 3,
      special: 4,
      insight: 4,
    },
    baseHP: 3,
    abilities: ['blaze'],
    evolutionStage: EvolutionStage.First,
    evolutionType: EvolutionTime.Medium,
    evolutions: ['004', '005', '006'],
    possibleMoves: [
      { rank: Rank.Starter, move: 'scratch' },
      { rank: Rank.Starter, move: 'growl' },
      { rank: Rank.Begginer, move: 'ember' },
      { rank: Rank.Begginer, move: 'smokescreen' },
      { rank: Rank.Amateur, move: 'dragon-rage' },
      { rank: Rank.Amateur, move: 'scary-face' },
      { rank: Rank.Amateur, move: 'fire-fang' },
      { rank: Rank.Amateur, move: 'flame-burst' },
      { rank: Rank.Amateur, move: 'slash' },
      { rank: Rank.Amateur, move: 'fire-spin' },
      { rank: Rank.Ace, move: 'flamethrower' },
      { rank: Rank.Ace, move: 'inferno' },
      { rank: Rank.Pro, move: 'metal-claw' },
      { rank: Rank.Pro, move: 'dragon-dance' },
      { rank: Rank.Pro, move: 'fire-pledge' },
    ],
  },
  '005': {
    id: '005',
    number: 5,
    name: 'Charmeleon',
    types: [PokemonType.Fire],
    height: 1.1,
    weight: 20,
    rank: Rank.Amateur,
    descriptionTitle: 'Flame Pokemon',
    description:
      'It turns aggressive after evolving, it is very hot-headed by nature, so it constantly starts fights. When it’s excited, the flame at the tip of its tail flares with a bluish white color.',
    startingAttributes: {
      strength: 2,
      dexterity: 2,
      vitality: 2,
      special: 2,
      insight: 2,
    },
    maxAttributes: {
      strength: 4,
      dexterity: 5,
      vitality: 4,
      special: 5,
      insight: 4,
    },
    baseHP: 4,
    abilities: ['blaze'],
    evolutionStage: EvolutionStage.Second,
    evolutionType: EvolutionTime.Medium,
    evolutions: ['004', '005', '006'],
    possibleMoves: [
      { rank: Rank.Starter, move: 'scratch' },
      { rank: Rank.Starter, move: 'growl' },
      { rank: Rank.Begginer, move: 'ember' },
      { rank: Rank.Begginer, move: 'smokescreen' },
      { rank: Rank.Amateur, move: 'dragon-range' },
      { rank: Rank.Amateur, move: 'scary-face' },
      { rank: Rank.Amateur, move: 'fire-fang' },
      { rank: Rank.Amateur, move: 'flame-burst' },
      { rank: Rank.Amateur, move: 'slash' },
      { rank: Rank.Amateur, move: 'fire-spin' },
      { rank: Rank.Ace, move: 'flamethrower' },
      { rank: Rank.Ace, move: 'inferno' },
      { rank: Rank.Pro, move: 'metal-claw' },
      { rank: Rank.Pro, move: 'dragon-dance' },
      { rank: Rank.Pro, move: 'fire-pledge' },
    ],
  },
  '006': {
    id: '006',
    number: 6,
    name: 'Charizard',
    types: [PokemonType.Fire, PokemonType.Flying],
    height: 1.7,
    weight: 125,
    rank: Rank.Ace,
    descriptionTitle: 'Flame Pokemon',
    description:
      'A Charizard flies around looking for strong opponents. It breathes intense flames that can melt any material. However, it will never touch a weaker foe. Not many trainers are able to handle its bad temper.',
    startingAttributes: {
      strength: 2,
      dexterity: 2,
      vitality: 2,
      special: 3,
      insight: 2,
    },
    maxAttributes: {
      strength: 5,
      dexterity: 6,
      vitality: 5,
      special: 6,
      insight: 5,
    },
    baseHP: 5,
    abilities: ['blaze'],
    evolutionStage: EvolutionStage.Final,
    evolutionType: '',
    evolutions: ['004', '005', '006'],
    possibleMoves: [
      { rank: Rank.Starter, move: 'scratch' },
      { rank: Rank.Starter, move: 'smokescreen' },
      { rank: Rank.Begginer, move: 'ember' },
      { rank: Rank.Begginer, move: 'growl' },
      { rank: Rank.Amateur, move: 'fire-fang' },
      { rank: Rank.Amateur, move: 'dragon-rage' },
      { rank: Rank.Amateur, move: 'air-slash' },
      { rank: Rank.Amateur, move: 'slash' },
      { rank: Rank.Amateur, move: 'scary-face' },
      { rank: Rank.Amateur, move: 'fire-spin' },
      { rank: Rank.Amateur, move: 'flame-burst' },
      { rank: Rank.Amateur, move: 'wing-attack' },
      { rank: Rank.Ace, move: 'dragon-claw' },
      { rank: Rank.Ace, move: 'flamethrower' },
      { rank: Rank.Ace, move: 'shadow-claw' },
      { rank: Rank.Ace, move: 'flare-blitz' },
      { rank: Rank.Ace, move: 'heat-wave' },
      { rank: Rank.Pro, move: 'thunder-punch' },
      { rank: Rank.Pro, move: 'outrage' },
      { rank: Rank.Pro, move: 'blast-burn' },
    ],
  },
};

export default pokemons;

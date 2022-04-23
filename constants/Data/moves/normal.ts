import { AttackType, MoveMap, PokemonType } from '../../../types';

const NormalMoves: MoveMap = {
  growl: {
    id: 'growl',
    type: PokemonType.Normal,
    name: 'Growl',
    power: 0,
    attactType: AttackType.Support,
    accuracyRoll: ['cute', 'tough', ['social', 'perform']],
    additionalInfo: "Reduce the foe's Strength. Sound Based.",
    description:
      'Either by a menacing attitude or cute demeanor, the foe will be unsure about attacking the user with full force.',
    effectIcons: [],
  },
  scratch: {
    id: 'scratch',
    type: PokemonType.Normal,
    name: 'Scratch',
    power: 2,
    attactType: AttackType.Physical,
    accuracyRoll: ['dexterity', ['fight', 'brawl']],
    description: 'The Pokémon uses its sharp claws to scratch the enemy.',
    effectIcons: [],
  },
  tackle: {
    id: 'tackle',
    type: PokemonType.Normal,
    name: 'Tackle',
    power: 2,
    attactType: AttackType.Physical,
    accuracyRoll: ['dexterity', ['fight', 'brawl']],
    damageRoll: ['dexterity'],
    description: 'A basic attack that consist on charging at an enemy.',
    effectIcons: [],
  },
};

export default NormalMoves;

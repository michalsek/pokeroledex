import { AttackType, MoveMap, MoveTarget, PokemonType } from '../../../types';

const Moves: MoveMap = {
  growl: {
    id: 'growl',
    type: PokemonType.Normal,
    name: 'Growl',
    power: 0,
    attactType: AttackType.Support,
    target: MoveTarget.AllFoes,
    accuracyRoll: ['cute', 'tough', ['social', 'perform']],
    traitDebuff: { name: 'strength', by: 1 },
    attackBase: 'sound',
  },
  tackle: {
    id: 'tackle',
    type: PokemonType.Normal,
    name: 'Tackle',
    power: 2,
    attactType: AttackType.Physical,
    target: MoveTarget.Foe,
    accuracyRoll: ['dexterity', ['fight', 'brawl']],
    damageRoll: ['dexterity'],
    description: 'A basic attack that consist on charging at an enemy.',
  },
};

export default Moves;

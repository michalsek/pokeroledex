import { AttackType, MoveMap, PokemonType } from '../../../types';

const BugMoves: MoveMap = {
  'attack-order': {
    id: 'attack-order',
    type: PokemonType.Bug,
    name: 'Attack Order',
    power: 3,
    attactType: AttackType.Physical,
    accuracyRoll: ['tough', ['social', 'nature']],
    damageRoll: ['strength'],
    additionalInfo: 'High Critical. Ranged',
    description:
      'The user calls upon her swarm and heeds them to charge against you. No matter where you run, they will surround you. Hope you are not allergic to bees.',
    effectIcons: [],
  },
};

export default BugMoves;

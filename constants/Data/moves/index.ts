import { MoveMap } from '../../../types';

import BugMoves from './bug';
import NormalMoves from './normal';

const PokemonMoves: MoveMap = {
  ...BugMoves,
  ...NormalMoves,
};

export default PokemonMoves;

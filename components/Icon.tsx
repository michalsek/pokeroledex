import { createIconSetFromIcoMoon } from '@expo/vector-icons';

const Icon = createIconSetFromIcoMoon(
  require('../assets/pokemon/selection.json'),
  'pokemon',
  'icomoon.ttf',
);

export default Icon;

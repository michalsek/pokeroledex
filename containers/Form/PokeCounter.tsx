import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { get, cloneDeep, set } from 'lodash';

import useData from 'context/Store';
import translate from '../../utils/translate';

interface Props {
  editable?: boolean;
  characterPath: string;
}

const PokeCounter: React.FC<Props> = (props) => {
  const { editable, characterPath } = props;
  const { onUpdateTrainer, trainer } = useData();

  const { caught, seen } = get(trainer, 'pokemons') ?? 0;

  if (editable) {
    return null;
  }

  return <View></View>;
};
import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { get, cloneDeep, set, toNumber } from 'lodash';

import useData from 'context/Store';
import getDataPath from '../../utils/getDataPath';

interface Props {
  editable?: boolean;
  characterPath?: string;
}

const MoneyInput: React.FC<Props> = (props) => {
  const { editable, characterPath } = props;
  const { onUpdateTrainer, trainer } = useData();
  const dataPath = getDataPath(characterPath, 'money');

  const money = get(trainer, dataPath);

  const onChangeMoney = (newText: string) => {
    const newData = cloneDeep(trainer);
    set(newData, dataPath, toNumber(newText));
    onUpdateTrainer(newData);
  };

  return (
    <View
      style={{
        borderWidth: 4,
        borderRadius: 40,
        borderColor: '#414042',
        backgroundColor: '#fff',
        flexDirection: 'row',
      }}
    >
      <Text
        style={{
          paddingLeft: 15,
          fontSize: 14,
          fontWeight: '700',
          textTransform: 'uppercase',
        }}
      >
        Money
      </Text>
      <TextInput
        editable={editable}
        value={money.toString()}
        onChangeText={onChangeMoney}
        style={{
          flex: 1,
          fontSize: 24,
          paddingHorizontal: 15,
          textAlign: editable ? 'left' : 'right',
          paddingVertical: 3,
        }}
      />
    </View>
  );
};

export default MoneyInput;

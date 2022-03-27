import React from 'react';
import { View, Text, TextInput as RNTextInput } from 'react-native';
import { get, cloneDeep, set } from 'lodash';

import useData from 'context/Store';
import translate from '../../utils/translate';
import getDataPath from '../../utils/getDataPath';

interface Props {
  editable?: boolean;
  characterPath?: string;
  characterType?: 'trainer' | 'pokemon';
  fieldName: string;
}

const TextInput: React.FC<Props> = (props) => {
  const {
    editable,
    characterPath,
    characterType = 'trainer',
    fieldName,
  } = props;
  const { onUpdateTrainer, trainer } = useData();

  const dataPath = getDataPath(characterPath, fieldName);
  const value = get(trainer, dataPath);

  const onChangeText = (newText: string) => {
    const newData = cloneDeep(trainer);

    set(newData, dataPath, newText);
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
        {translate([characterType, fieldName])}
      </Text>
      <RNTextInput
        editable={editable}
        value={value}
        onChangeText={onChangeText}
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

export default TextInput;

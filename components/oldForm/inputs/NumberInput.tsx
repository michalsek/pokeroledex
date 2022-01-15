import React, { useContext } from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';
import { get, cloneDeep, set, toNumber } from 'lodash';

import useData from '../../../context/Store';
import { FieldContext } from '../Field';

type NumberInputProps = {
  valuePath: string;
};

const NumberInput: React.FC<NumberInputProps> = (props) => {
  const { fontSize, borderRadius, paddingHorizontal } =
    useContext(FieldContext);
  const { valuePath } = props;
  const { onUpdateData, ...data } = useData();

  const onChangeText = (newText: string) => {
    const newData = cloneDeep(data);

    set(newData, valuePath, toNumber(newText));

    onUpdateData(newData);
  };

  const value = get(data, valuePath);

  const dynamicStyles = {
    fontSize,
    borderRadius,
    paddingHorizontal,
  };

  return (
    <RNTextInput
      keyboardType="number-pad"
      style={[styles.input, dynamicStyles]}
      value={value ? value.toString(10) : ''}
      onChangeText={onChangeText}
    />
  );
};

export default NumberInput;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
  },
});

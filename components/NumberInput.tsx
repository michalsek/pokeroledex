import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';
import { get, cloneDeep, set, toNumber } from 'lodash';

import useData from '../context/Store';
import Field, { paddingHorizontal, borderRadius, height } from './Field';

type NumberInputProps = {
  variant?: 'bordered' | 'bare';
  label?: string;
  valuePath: string;
};

const NumberInput: React.FC<NumberInputProps> = (props) => {
  const { variant = 'bordered', label, valuePath } = props;
  const { onUpdateData, ...data } = useData();

  const onChangeText = (newText: string) => {
    const newData = cloneDeep(data);

    set(newData, valuePath, toNumber(newText, 10));

    onUpdateData(newData);
  };

  const value = get(data, valuePath);

  const input = (
    <RNTextInput
      keyboardType="number-pad"
      style={[styles.input, variant === 'bordered' && styles.borderedInput]}
      value={value ? value.toString(10) : ''}
      onChangeText={onChangeText}
    />
  );

  if (variant === 'bordered') {
    return <Field label={label ?? 'No name'}>{input}</Field>;
  }

  return input;
};

export default NumberInput;

const fontSize = (3 * height) / 7;

const styles = StyleSheet.create({
  input: {
    fontSize,
  },
  borderedInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius,
    alignSelf: 'stretch',
    paddingHorizontal,
  },
});

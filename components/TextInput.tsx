import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';
import { get, cloneDeep, set } from 'lodash';

import useData from '../context/Store';
import Field, { paddingHorizontal, borderRadius, height } from './Field';

type TextInputProps = {
  variant?: 'bordered' | 'bare';
  label?: string;
  valuePath: string;
};

const TextInput: React.FC<TextInputProps> = (props) => {
  const { variant = 'bordered', label, valuePath } = props;
  const { onUpdateData, ...data } = useData();

  const onChangeText = (newText: string) => {
    const newData = cloneDeep(data);

    set(newData, valuePath, newText);

    onUpdateData(newData);
  };

  const value = get(data, valuePath);

  const input = (
    <RNTextInput
      style={[styles.input, variant === 'bordered' && styles.borderedInput]}
      value={value ?? ''}
      onChangeText={onChangeText}
    />
  );

  if (variant === 'bordered') {
    return <Field label={label ?? 'No name'}>{input}</Field>;
  }

  return input;
};

export default TextInput;

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

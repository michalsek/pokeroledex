import React, { useContext } from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';
import { get, cloneDeep, set } from 'lodash';

import useData from '../../../context/Store';
import { FieldContext } from '../Field';

type TextInputProps = {
  valuePath: string;
};

const TextInput: React.FC<TextInputProps> = (props) => {
  const { fontSize, borderRadius, paddingHorizontal } =
    useContext(FieldContext);
  const { valuePath } = props;
  const { onUpdateData, ...data } = useData();

  const onChangeText = (newText: string) => {
    const newData = cloneDeep(data);

    set(newData, valuePath, newText);

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
      style={[styles.input, dynamicStyles]}
      value={value ?? ''}
      onChangeText={onChangeText}
    />
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
  },
});

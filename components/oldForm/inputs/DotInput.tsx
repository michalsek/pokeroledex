import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { get, times } from 'lodash';

import useData from '../../../context/Store';
import { FieldContext } from '../Field';

type DotInputProps = {
  valuePath: string;
  maxValue: number;
};

const DotInput: React.FC<DotInputProps> = (props) => {
  const { height } = useContext(FieldContext);
  const { valuePath, maxValue } = props;
  const { onUpdateData, ...data } = useData();

  const value = get(data, valuePath);

  const dynamicStyle = {
    width: (height * 2) / 3,
    height: (height * 2) / 3,
    borderRadius: (height * 2) / 6,
  };

  return (
    <View style={styles.container}>
      {times(maxValue, (number) => (
        <View
          key={number}
          style={[
            styles.dot,
            number + 1 <= value && styles.filledDot,
            dynamicStyle,
          ]}
        />
      ))}
    </View>
  );
};

export default DotInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    backgroundColor: 'white',
  },
  filledDot: {
    backgroundColor: 'lightblue',
  },
});

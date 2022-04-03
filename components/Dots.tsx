import React, { memo, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { times } from 'lodash';

interface DotsProps {
  value: number;
  maxValue: number;
  size?: number;
  frontColor?: string;
  backColor?: string;
}

const Dots: React.FC<DotsProps> = (props) => {
  const {
    value,
    maxValue,
    size = 15,
    frontColor = '#00b2c2',
    backColor = '#fff',
  } = props;

  const sizeStyle = useMemo(
    () => ({ width: size, height: size, borderRadius: size / 2 }),
    [size],
  );

  return (
    <View style={styles.container}>
      {times(maxValue, (num) => (
        <View
          key={num}
          style={[
            sizeStyle,
            {
              backgroundColor: num + 1 <= value ? frontColor : backColor,
              marginRight: num + 1 === maxValue ? 0 : 3,
            },
          ]}
        />
      ))}
    </View>
  );
};

export default memo(Dots);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

import React, { PropsWithChildren } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface FieldProps {
  label: string;
}

export const height = 30;
export const fontSize = (3 * height) / 7;
export const paddingHorizontal = height / 3;
export const borderRadius = height / 2;

const Field: React.FC<PropsWithChildren<FieldProps>> = (props) => {
  const { children, label } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {children}
    </View>
  );
};

export default Field;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#414042',
    height,
    borderRadius,
    padding: 4,
    alignItems: 'center',
  },
  label: {
    paddingHorizontal,
    color: '#fff',
    paddingRight: 10,
    fontWeight: '700',
    fontSize,
    width: 95,
  },
});

import React, { PropsWithChildren, createContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Size = 'small' | 'large';

type ColorScheme = 'dark';

type Variant = 'row' | 'column';

export interface FieldProps {
  label: string;

  // Optionals
  size?: Size;
  variant?: Variant;
  colorScheme?: ColorScheme;
}

export const FieldContext = createContext<{ [key: string]: any }>({});

const Field: React.FC<PropsWithChildren<FieldProps>> = (props) => {
  const {
    label,
    children,
    size = 'small',
    variant = 'row',
    colorScheme = 'dark',
  } = props;

  const height = {
    small: 35,
    large: 50,
  }[size];

  const borderRadius = height / 2;
  const paddingHorizontal = height / 3;
  const fontSize = (3 * height) / 7;

  const dynamicContainerStyle = {
    height: variant === 'row' ? height : height * 2,
    borderRadius,
    flexDirection: variant,
  };

  const dynamicLabelStyle = {
    paddingHorizontal,
    fontSize,
  };

  return (
    <FieldContext.Provider
      value={{ variant, height, borderRadius, paddingHorizontal, fontSize }}
    >
      <View style={[styles.container, dynamicContainerStyle]}>
        <Text style={[styles.label, dynamicLabelStyle]}>{label}</Text>
        {children}
      </View>
    </FieldContext.Provider>
  );
};

export default Field;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#414042',
    padding: 4,
    alignItems: 'center',
  },
  label: {
    color: '#fff',
    paddingRight: 10,
    fontWeight: '700',
    width: 95,
  },
});

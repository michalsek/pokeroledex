import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Size from '../constants/Size';

interface HeaderButtonProps {
  label: string;
  onPress: () => void;
}

const HeaderButton: React.FC<HeaderButtonProps> = (props) => {
  const { label, onPress } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderButton;

const styles = StyleSheet.create({
  container: {
    paddingRight: Size.spacing.medium,
  },
  button: {},
  text: {
    color: Colors.textAlt,
  },
});

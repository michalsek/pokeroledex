import React, { memo } from 'react';
import Animated from 'react-native-reanimated';
import { Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface BadgeProps {
  label: string;
  color?: string;
  style?: Animated.AnimateStyle<StyleProp<ViewStyle>>;
}

const Badge: React.FC<BadgeProps> = ({ label, color, style }) => (
  <Animated.View
    style={[
      styles.container,
      color ? { backgroundColor: `${color}CC` } : {},
      style,
    ]}
  >
    <Text style={styles.text}>{label}</Text>
  </Animated.View>
);

export default memo(Badge);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255,255, 0.2)',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 16,
  },
});

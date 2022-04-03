import React, { memo } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Svg, G, Circle } from 'react-native-svg';
import Animated from 'react-native-reanimated';

interface DotsBackgroundProps {
  color: string;
  style?: StyleProp<Animated.AnimateStyle<StyleProp<ViewStyle>>>;
}

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const DotsBackground: React.FC<DotsBackgroundProps> = ({ color, style }) => {
  return (
    <AnimatedSvg viewBox="0 0 111.447 111.396" style={style}>
      <G>
        <Circle fill={color} cx="8.177" cy="8.177" r="8.176" />
        <Circle fill={color} cx="31.95" cy="8.178" r="8.176" />
        <Circle fill={color} cx="55.723" cy="8.177" r="8.176" />
        <Circle fill={color} cx="79.496" cy="8.177" r="8.176" />
        <Circle fill={color} cx="103.269" cy="8.178" r="8.176" />
        <Circle fill={color} cx="8.178" cy="31.942" r="8.176" />
        <Circle fill={color} cx="31.952" cy="31.942" r="8.176" />
        <Circle fill={color} cx="55.725" cy="31.942" r="8.176" />
        <Circle fill={color} cx="79.497" cy="31.942" r="8.175" />
        <Circle fill={color} cx="103.27" cy="31.942" r="8.176" />
        <G>
          <Circle fill={color} cx="8.176" cy="55.701" r="8.176" />
          <Circle fill={color} cx="31.949" cy="55.702" r="8.176" />
          <Circle fill={color} cx="55.722" cy="55.701" r="8.177" />
          <Circle fill={color} cx="79.495" cy="55.701" r="8.176" />
          <Circle fill={color} cx="103.268" cy="55.702" r="8.177" />
        </G>
        <G>
          <Circle fill={color} cx="8.176" cy="79.462" r="8.176" />
          <Circle fill={color} cx="31.949" cy="79.462" r="8.176" />
          <Circle fill={color} cx="55.722" cy="79.462" r="8.177" />
          <Circle fill={color} cx="79.495" cy="79.462" r="8.176" />
          <Circle fill={color} cx="103.269" cy="79.462" r="8.176" />
        </G>
        <G>
          <Circle fill={color} cx="8.178" cy="103.219" r="8.176" />
          <Circle fill={color} cx="31.951" cy="103.221" r="8.176" />
          <Circle fill={color} cx="55.724" cy="103.219" r="8.177" />
          <Circle fill={color} cx="79.497" cy="103.219" r="8.176" />
          <Circle fill={color} cx="103.271" cy="103.221" r="8.176" />
        </G>
      </G>
    </AnimatedSvg>
  );
};

export default memo(DotsBackground);

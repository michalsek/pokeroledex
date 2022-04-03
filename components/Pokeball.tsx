import React, { memo } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Svg, Path, Circle } from 'react-native-svg';
import Animated from 'react-native-reanimated';

interface PokeballProps {
  color: string;
  style?: StyleProp<Animated.AnimateStyle<StyleProp<ViewStyle>>>;
}

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const Pokeball: React.FC<PokeballProps> = ({ color, style }) => {
  return (
    <AnimatedSvg viewBox="0 0 256.038 255.581" style={style}>
      <Path
        fill={color}
        fill-opacity="0.1"
        d="M127.686,44.247c38.175,0,70.346,25.614,80.324,60.587h45.632
	C242.806,45.214,190.537,0,127.686,0C64.834,0,12.565,45.214,1.73,104.834h45.632C57.34,69.861,89.511,44.247,127.686,44.247z"
      />
      <Path
        fill={color}
        fill-opacity="0.1"
        d="M208.009,150.747c-9.978,34.972-42.148,60.587-80.324,60.587
	c-38.175,0-70.345-25.615-80.323-60.587H1.73c10.834,59.621,63.104,104.834,125.955,104.834
	c62.851,0,115.121-45.213,125.956-104.834H208.009z"
      />
      <Circle fill={color} cx="128.019" cy="127.79" r="44.969" />
    </AnimatedSvg>
  );
};

export default memo(Pokeball);

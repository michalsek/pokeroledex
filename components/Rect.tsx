import React, { memo } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import Animated from 'react-native-reanimated';

interface RectProps {
  color: string;
  style?: StyleProp<Animated.AnimateStyle<StyleProp<ViewStyle>>>;
}

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const Rect: React.FC<RectProps> = ({ color, style }) => {
  return (
    <AnimatedSvg viewBox="0 0 230.359 230.36" style={style}>
      <Path
        d="M227.441,108.108c3.891,3.889,3.891,10.253,0,14.143l-105.19,105.191c-3.89,3.89-10.253,3.89-14.143,0L2.917,122.251
		c-3.889-3.89-3.889-10.253,0-14.143L108.108,2.917c3.889-3.889,10.253-3.889,14.142,0L227.441,108.108z"
        fill={color}
      />
    </AnimatedSvg>
  );
};

export default memo(Rect);

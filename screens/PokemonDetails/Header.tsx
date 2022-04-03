import React, { useMemo } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  interpolate,
  SharedValue,
  Extrapolation,
  useAnimatedStyle,
} from 'react-native-reanimated';

import Rect from 'components/Rect';
import DotsBackground from 'components/DotsBackground';
import Layout from 'components/Layout';
import Pokeball from 'components/Pokeball';
import { Pokemons } from 'constants/Data';
import getPokemonBackground from '../../utils/getPokemonBackground';
import { Rank } from '../../types';

interface HeaderProps {
  id: number;
  rank: Rank;
  headerHeight: SharedValue<number>;
}

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

export const ExpnadedHeaderHeight = (screenHeight * 4) / 10;
export const CollapsedHeaderHeight = 150;
const MinPokeballSize = 120;
const MAxPokeballSize = 190;

const Header: React.FC<HeaderProps> = (props) => {
  const { id, rank, headerHeight } = props;

  const insets = useSafeAreaInsets();
  const pokemonData = useMemo(() => Pokemons[id], [id]);
  const backgroundColor = useMemo(() => getPokemonBackground(id), [id]);

  const pokeNum = useMemo(
    () =>
      `#${id.toLocaleString('en-US', {
        minimumIntegerDigits: 3,
        useGrouping: false,
      })}`,
    [id],
  );

  const headerStyles = useAnimatedStyle(() => {
    return {
      height: headerHeight.value,
    };
  });

  const ballImageStyles = useAnimatedStyle(() => {
    const left = interpolate(
      headerHeight.value,
      [CollapsedHeaderHeight, ExpnadedHeaderHeight],
      [screenWidth - MinPokeballSize, (screenWidth - MAxPokeballSize) / 2],
      Extrapolation.CLAMP,
    );
    const rotation = interpolate(
      headerHeight.value,
      [CollapsedHeaderHeight, ExpnadedHeaderHeight],
      [30, 0],
      Extrapolation.CLAMP,
    );

    const size = interpolate(
      headerHeight.value,
      [CollapsedHeaderHeight, ExpnadedHeaderHeight],
      [MinPokeballSize, MAxPokeballSize],
      Extrapolation.CLAMP,
    );

    return {
      width: size,
      height: size,
      left,
      transform: [{ rotate: `${rotation}deg` }],
    };
  });

  const hideCollapsedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      headerHeight.value,
      [CollapsedHeaderHeight, ExpnadedHeaderHeight],
      [0, 1],
      Extrapolation.CLAMP,
    );

    return {
      opacity,
    };
  });

  return (
    <Animated.View
      style={[{ backgroundColor, paddingTop: insets.top + 30 }, headerStyles]}
    >
      <View style={styles.headerContent}>
        <Animated.Text style={[styles.pokemonNumber, hideCollapsedStyle]}>
          {pokeNum}
        </Animated.Text>
        <Animated.View style={[styles.row, styles.rank, hideCollapsedStyle]}>
          <Layout.Badge label={rank} />
        </Animated.View>
        <SharedElement id={`pokemon.${id}.name`}>
          <Text style={styles.pokemonName}>{pokemonData.name}</Text>
        </SharedElement>
        <Layout.Stack size="small" />
        <Animated.Text style={[styles.description, hideCollapsedStyle]}>
          {pokemonData.descriptionTitle}
        </Animated.Text>
        <Layout.Stack size="medium" />
        <Animated.View style={[styles.row, hideCollapsedStyle]}>
          {pokemonData.types.map((type, index) => (
            <React.Fragment key={type}>
              <Layout.Badge
                label={type}
                color={index > 0 ? getPokemonBackground(type) : undefined}
              />
              <Layout.Queue size="small" />
            </React.Fragment>
          ))}
        </Animated.View>
      </View>
      <Rect color="rgba(255, 255, 255, 0.05)" style={styles.rect} />
      <DotsBackground color="rgba(255, 255, 255, 0.05)" style={styles.dots} />
      <Pokeball
        color="rgba(255, 255, 255, 0.15)"
        style={[styles.headerBgImage, ballImageStyles]}
      />
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerBgImage: {
    position: 'absolute',
    bottom: -40,
    zIndex: 0,
  },
  headerContent: {
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  pokemonNumber: {
    color: 'rgba(255, 255, 255, 0.1)',
    fontWeight: '900',
    fontSize: 36,
    position: 'absolute',
    top: 0,
    right: 15,
  },
  pokemonName: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '900',
    fontSize: 20,
  },
  rect: {
    position: 'absolute',
    width: 210,
    height: 210,
    top: -60,
    left: -60,
  },
  dots: {
    position: 'absolute',
    width: 60,
    height: 60,
    top: 15,
    right: 60,
    transform: [{ rotate: '-28deg' }],
  },
  description: {
    color: 'rgba(255, 255, 255, 0.9)',
  },
  row: {
    flexDirection: 'row',
  },
  rank: {
    position: 'absolute',
    right: 15,
    top: 50,
  },
});

import * as FileSystem from 'expo-file-system';
import React, { useEffect, useState } from 'react';
import {
  Image,
  ImageStyle,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Icon from './Icon';

interface PokemonImageProps {
  id: number;
  size?: number;
  style?: ImageStyle;
}

function getLocalImageUrl(id: number) {
  return `${FileSystem.cacheDirectory}pokemon-${id.toLocaleString('en-US', {
    minimumIntegerDigits: 5,
    useGrouping: false,
  })}`;
}

function getRemoteUrl(id: number) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

const PokemonImage: React.FC<PokemonImageProps> = ({ id, size, style }) => {
  const [source, setSource] = useState<ImageSourcePropType | undefined>();
  const loading = useSharedValue(0);

  useEffect(() => {
    async function getPokemonImage() {
      const localUrl = getLocalImageUrl(id);
      const fileInfo = await FileSystem.getInfoAsync(localUrl);

      if (!fileInfo.exists) {
        await FileSystem.downloadAsync(getRemoteUrl(id), localUrl);
      }

      setSource({ uri: localUrl });
    }

    void getPokemonImage();
  }, [id]);

  loading.value = withRepeat(withTiming(360, { duration: 2500 }), -1);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ rotateY: `${loading.value}deg` }],
  }));

  if (!source) {
    return (
      <Animated.View
        style={[
          { width: size, height: size },
          styles.loadingContainer,
          animatedStyles,
        ]}
      >
        <Icon name="Arceus" size={50} style={styles.loadingIcon} />
      </Animated.View>
    );
  }

  return (
    <Animated.Image
      source={source}
      style={[!!size && { width: size, height: size }, style]}
    />
  );
};

export default PokemonImage;

const styles = StyleSheet.create({
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingIcon: {
    color: 'rgba(255, 255, 255, 0.8)',
  },
});

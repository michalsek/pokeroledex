import React, { useCallback, useMemo } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

import pokeballImage from 'assets/images/pokeball.png';
import PokemonImage from 'components/PokemonImage';
import { Pokemons } from 'constants/Data';
import Layout from 'components/Layout';
import getPokemonBackground from '../../utils/getPokemonBackground';
import { OwnedPokemon } from '../../types';

interface ListItemProps {
  pokemon: OwnedPokemon;
  onOpenDetails: (id: number) => void;
}

const ListItem: React.FC<ListItemProps> = ({ pokemon, onOpenDetails }) => {
  const backgroundColor = useMemo(
    () => getPokemonBackground(pokemon.number),
    [pokemon.number],
  );

  const pokeNum = useMemo(
    () =>
      `#${pokemon.number.toLocaleString('en-US', {
        minimumIntegerDigits: 3,
        useGrouping: false,
      })}`,
    [pokemon.number],
  );

  const pokemonData = useMemo(() => Pokemons[pokemon.number], [pokemon.number]);

  const onItemPress = useCallback(
    () => onOpenDetails(pokemon.number),
    [onOpenDetails, pokemon.number],
  );

  return (
    <TouchableOpacity onPress={onItemPress}>
      <View style={[{ backgroundColor }, styles.container]}>
        <Text style={styles.number}>{pokeNum}</Text>
        <View style={styles.dataContent}>
          <View>
            <SharedElement id={`pokemon.${pokemon.number}.name`}>
              <Text style={styles.name}>{pokemonData.name}</Text>
            </SharedElement>
            <Layout.Stack size="small" />
            <Text style={styles.description}>
              {pokemonData.descriptionTitle}
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            {pokemonData.types.map((type, index) => (
              <React.Fragment key={type}>
                <Layout.Badge
                  label={type}
                  color={index > 0 ? getPokemonBackground(type) : undefined}
                />
                <Layout.Queue size="small" />
              </React.Fragment>
            ))}
          </View>
        </View>
        <SharedElement
          id={`pokemon.${pokemon.number}.image`}
          style={{ zIndex: 1 }}
        >
          <PokemonImage id={pokemon.number} size={100} />
        </SharedElement>
        <Image source={pokeballImage} style={styles.bgImage} />
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  dataContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  number: {
    color: 'rgba(255, 255, 255, 0.15)',
    fontWeight: '900',
    fontSize: 26,
    position: 'absolute',
    top: 10,
    right: 100,
  },
  name: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '900',
    fontSize: 20,
  },
  rankWrapper: {
    backgroundColor: 'rgba(255, 255,255, 0.2)',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  rankText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 16,
  },
  description: {
    color: 'rgba(255, 255, 255, 0.9)',
  },
  bgImage: {
    width: 215,
    height: 215,
    position: 'absolute',
    right: -30,
    top: -10,
    zIndex: 0,
    opacity: 0.05,
    transform: [{ rotate: '30deg' }],
  },
});

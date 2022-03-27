import React, { useMemo } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import pokeballImage from 'assets/images/pokeball.png';
import PokemonImage from 'components/PokemonImage';
import { Pokemons } from 'constants/Data';
import Layout from 'components/Layout';
import getPokemonBackground from '../../utils/getPokemonBackground';
import { OwnedPokemon } from '../../types';

interface ListItemProps {
  pokemon: OwnedPokemon;
}

const ListItem: React.FC<ListItemProps> = ({ pokemon }) => {
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

  return (
    <TouchableOpacity>
      <View style={[{ backgroundColor }, styles.container]}>
        <Text style={styles.number}>{pokeNum}</Text>
        <View style={styles.dataContent}>
          <View>
            <Text style={styles.name}>{pokemonData.name}</Text>
            <Layout.Stack size="small" />
            <Text style={styles.description}>
              {pokemonData.descriptionTitle}
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.rankWrapper}>
              <Text style={styles.rankText}>{pokemonData.rank}</Text>
            </View>
          </View>
        </View>
        <PokemonImage id={pokemon.number} size={100} />
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

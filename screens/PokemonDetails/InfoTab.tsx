import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from 'constants/Colors';
import Layout from 'components/Layout';
import { Pokemons } from 'constants/Data';
import PokemonImage from 'components/PokemonImage';
import getPokemonBackground from '../../utils/getPokemonBackground';

interface Props {
  id: number;
}

const InfoTab: React.FC<Props> = ({ id }) => {
  const pokemonData = useMemo(() => Pokemons[id], [id]);

  const color = useMemo(() => getPokemonBackground(id), [id]);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color, fontWeight: '600' }]}>
        {pokemonData.descriptionTitle}
      </Text>
      <Layout.Stack size="medium" />
      <Text style={[styles.description, { fontStyle: 'italic', fontSize: 14 }]}>
        {pokemonData.description}
      </Text>
      <Layout.Stack size="medium" />
      <View style={styles.row}>
        <Text style={[styles.title, styles.minWidth]}>Height</Text>
        <Layout.Queue size="medium" />
        <Text style={styles.description}>{`${pokemonData.height}m`}</Text>
      </View>
      <Layout.Stack size="small" />
      <View style={styles.row}>
        <Text style={[styles.title, styles.minWidth]}>Weight</Text>
        <Layout.Queue size="medium" />
        <Text style={styles.description}>{`${pokemonData.weight}kg`}</Text>
      </View>
      <Layout.Stack size="small" />
      <View style={styles.row}>
        <Text style={[styles.title, styles.minWidth]}>Evolution Stage</Text>
        <Layout.Queue size="medium" />
        <Text style={styles.description}>{pokemonData.evolutionStage}</Text>
      </View>
      {!!pokemonData.evolutionType && (
        <>
          <Layout.Stack size="small" />
          <View style={styles.row}>
            <Text style={[styles.title, styles.minWidth]}>Evolution Type</Text>
            <Layout.Queue size="medium" />
            <Text style={styles.description}>{pokemonData.evolutionType}</Text>
          </View>
        </>
      )}
      <Layout.Stack size="small" />
      <Text style={styles.title}>Evolutions</Text>
      <Layout.Stack size="medium" />
      <View style={[styles.row, styles.evolutions]}>
        {pokemonData.evolutions.map((id) => (
          <View key={id} style={styles.evolutionTile}>
            <PokemonImage id={id} style={styles.evolutionImage} />
            <Layout.Stack size="small" />
            <Text style={styles.title}>{`#${id.toLocaleString('en-US', {
              minimumIntegerDigits: 3,
              useGrouping: false,
            })}`}</Text>
            <Text style={[styles.title, { color, fontWeight: '600' }]}>
              {Pokemons[id].name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default InfoTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  title: {
    fontSize: 14,
    color: Colors.text,
  },
  description: {
    fontSize: 16,
  },
  minWidth: {
    minWidth: 120,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  evolutions: {
    width: 250,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  evolutionTile: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  evolutionImage: {
    width: 50,
    height: 50,
  },
});

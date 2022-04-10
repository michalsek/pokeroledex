import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import useData from 'context/Store';
import Colors from 'constants/Colors';
import Layout from 'components/Layout';
import { Pokemons } from 'constants/Data';
import MoveList from 'containers/MoveList';
import Abilities from 'containers/Abilties';
import getOwnedPokemon from '../../utils/getOwnedPokemon';
import { getColorForPokemonId } from '../../utils/getPokemonBackground';

interface Props {
  id: string;
  onEditMoves: () => void;
}

const MovesTab: React.FC<Props> = ({ id, onEditMoves }) => {
  const { trainer } = useData();
  const { pokemon } = getOwnedPokemon(trainer, id);
  const pokemonData = useMemo(() => Pokemons[id], [id]);
  const color = useMemo(() => getColorForPokemonId(id), [id]);

  return (
    <View style={styles.container}>
      <Layout.Stack size="large" />
      <View style={styles.row}>
        <View style={styles.row}>
          <Text style={[styles.title, { color }]}>HP</Text>
          <Layout.Queue size="medium" />
          <Text style={styles.description}>
            {pokemon.attributes.vitality + pokemonData.baseHP}
          </Text>
        </View>
        {/* <Layout.Queue size="large" /> */}
        {/* <Layout.Queue size="large" /> */}
        {/* <View style={styles.row}>
          <Text style={styles.title}>Will</Text>
          <Layout.Queue size="medium" />
          <Text style={styles.description}>TO DO</Text>
        </View> */}
      </View>
      <Layout.Stack size="medium" />
      <Text style={[styles.title, { color }]}>Abilities</Text>
      <Layout.Stack size="small" />
      <Abilities abilities={pokemonData.abilities} />
      <Layout.Stack size="large" />
      <MoveList id={id} onEditMoves={onEditMoves} />
    </View>
  );
};

export default MovesTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: Colors.text,
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
});

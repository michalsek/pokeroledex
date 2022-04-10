import React, { useMemo, useCallback, useState } from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';
import { uniq, filter, startCase } from 'lodash';

import useData from 'context/Store';
import { Pokemons } from 'constants/Data';
import { PokemonStackScreenProps } from '../../types';
import Colors from 'constants/Colors';

const MovesScreen: React.FC<PokemonStackScreenProps<'Moves'>> = (props) => {
  const { id } = props.route.params;
  const { trainer, onUpdateTrainer } = useData();

  const pokemonData = useMemo(() => Pokemons[id], [id]);
  const pokemon = useMemo(() => {
    return trainer.pokemonsOwned.find((p) => p.id === id);
  }, [trainer, id]);

  const possibleMoves = useMemo(() => {
    const moves = [...pokemonData.possibleMoves, ...(pokemon?.moves ?? [])];

    return uniq(moves);
  }, [pokemon, pokemonData]);

  const onToggleMove = useCallback(
    (move: string) => {
      if (!pokemon) {
        return;
      }
      const newMoves = pokemon.moves.includes(move)
        ? filter(pokemon.moves, (m) => m !== move)
        : [...pokemon.moves, move];

      const pokemonsOwned = trainer.pokemonsOwned.map((poke) => {
        if (poke.number === pokemon.number) {
          return {
            ...poke,
            moves: newMoves,
          };
        }

        return poke;
      });

      onUpdateTrainer({ ...trainer, pokemonsOwned });
    },
    [pokemon, onUpdateTrainer],
  );

  const renderMove: ListRenderItem<string> = useCallback(
    ({ item }) => {
      const isSelected = pokemon?.moves.includes(item);

      const onPress = () => {
        onToggleMove(item);
      };

      return (
        <TouchableOpacity onPress={onPress}>
          <View style={[styles.item, isSelected && styles.itemSelected]}>
            <Text style={styles.moveName}>{startCase(item)}</Text>
          </View>
        </TouchableOpacity>
      );
    },
    [pokemon],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={possibleMoves}
        keyExtractor={(item) => item}
        renderItem={renderMove}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default MovesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 15,
  },
  item: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    overflow: 'hidden',
    flexDirection: 'row',
    borderWidth: 1,
  },
  itemSelected: {
    backgroundColor: 'rgba(65, 64, 66, 0.3)',
  },
  moveName: {
    color: Colors.text,
    fontWeight: '900',
    fontSize: 16,
  },
});

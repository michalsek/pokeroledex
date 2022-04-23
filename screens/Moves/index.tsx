import React, { useMemo, useCallback, useState } from 'react';
import { StyleSheet, FlatList, View, ListRenderItem } from 'react-native';
import { uniqBy, filter, find } from 'lodash';

import useData from 'context/Store';
import Colors from 'constants/Colors';
import { Pokemons } from 'constants/Data';
import MoveListItem from 'containers/MoveListItem';
import { PokemonStackScreenProps, PossibleMove } from '../../types';

const MovesScreen: React.FC<PokemonStackScreenProps<'Moves'>> = (props) => {
  const { id } = props.route.params;
  const { trainer, onUpdateTrainer } = useData();

  const pokemonData = useMemo(() => Pokemons[id], [id]);
  const pokemon = useMemo(() => {
    return trainer.pokemonsOwned.find((p) => p.id === id);
  }, [trainer, id]);

  const possibleMoves = useMemo(() => {
    const moves = [...pokemonData.possibleMoves, ...(pokemon?.moves ?? [])];

    return uniqBy(moves, (m) => m.move);
  }, [pokemon, pokemonData]);

  const onToggleMove = useCallback(
    (move: PossibleMove) => {
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

  const renderMove: ListRenderItem<PossibleMove> = useCallback(
    ({ item, index }) => {
      const isSelected = !!find(pokemon?.moves, (m) => m.move === item.move);

      const onPress = () => {
        onToggleMove(item);
      };

      return (
        <MoveListItem
          move={item}
          // margin={index % 2 === 1 ? 'left' : 'right'}
          onPress={onPress}
          isHighlighted={isSelected}
        />
      );
    },
    [pokemon],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={possibleMoves}
        keyExtractor={(item) => `${item.rank}-${item.move}`}
        renderItem={renderMove}
        // numColumns={2}
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

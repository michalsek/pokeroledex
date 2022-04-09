import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { startCase } from 'lodash';

import Icon from 'components/Icon';
import useData from 'context/Store';
import getPokemonBackground from '../utils/getPokemonBackground';
import Layout from 'components/Layout';

interface Props {
  id: number;
  onEditMoves: () => void;
}

const MoveList: React.FC<Props> = ({ id, onEditMoves }) => {
  const color = useMemo(() => getPokemonBackground(id), [id]);
  const { trainer } = useData();

  const pokemon = useMemo(() => {
    return trainer.pokemonsOwned.find((p) => p.number === id);
  }, [trainer, id]);

  return (
    <View>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color, fontWeight: '600' }]}>
          Moves
        </Text>
        <TouchableOpacity onPress={onEditMoves}>
          <Icon name="pencil-square" style={[styles.editIcon, { color }]} />
        </TouchableOpacity>
      </View>
      <Layout.Stack size="medium" />
      <View style={styles.listContainer}>
        {pokemon?.moves.map((move, index) => (
          <View style={[styles.item, index % 2 === 1 && { marginLeft: '5%' }]}>
            <Text style={styles.itemTitle}>{startCase(move)}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default MoveList;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 14,
  },
  editIcon: {
    fontSize: 20,
  },
  listContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
  },
  item: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    overflow: 'hidden',
    flexDirection: 'row',
    borderWidth: 1,
    width: '45%',
  },
  itemTitle: {},
});

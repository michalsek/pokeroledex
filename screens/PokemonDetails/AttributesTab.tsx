import React, { useState, useMemo, useCallback } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';

import useData from 'context/Store';
import Layout from 'components/Layout';
import { Pokemons } from 'constants/Data';
import Attributes from 'containers/Attributes';
import { PokemonAttributes } from '../../types';
import getOwnedPokemon from '../../utils/getOwnedPokemon';
import { getColorForPokemonId } from '../../utils/getPokemonBackground';

interface Props {
  id: string;
}

const AttributesTab: React.FC<Props> = ({ id }) => {
  const [editMode, setEditMode] = useState(false);
  const { trainer } = useData();

  const color = useMemo(() => getColorForPokemonId(id), [id]);
  const pokemonData = useMemo(() => Pokemons[id], [id]);
  const { characterPath } = getOwnedPokemon(trainer, id);

  const onToggleEdit = useCallback(() => {
    setEditMode(!editMode);
  }, [editMode, setEditMode]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onToggleEdit}>
          <Text style={styles.editText}>{editMode ? 'Done' : 'Edit'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.sectionTitle, { color }]}>Attributes</Text>
      <Layout.Stack size="small" />
      <Attributes
        attributeType="pokemonAttributes"
        characterPath={characterPath}
        editable={editMode}
        getMaxValue={(attribute) =>
          pokemonData.maxAttributes[attribute as keyof PokemonAttributes]
        }
      />
      <Layout.Stack size="large" />
      <Layout.Stack size="large" />
      <Layout.Stack size="large" />
      <Text style={[styles.sectionTitle, { color }]}>Social Attributes</Text>
      <Layout.Stack size="small" />
      <Attributes
        attributeType="socialAttributes"
        characterPath={characterPath}
        editable={editMode}
      />
    </View>
  );
};

export default AttributesTab;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
  header: {
    position: 'absolute',
    flexDirection: 'row',
    right: 15,
    top: 15,
    zIndex: 1,
  },
  editText: {
    fontWeight: '500',
    color: '#00b2c2',
  },
  sectionTitle: {
    fontWeight: '500',
    color: '#000',
    fontSize: 16,
  },
});

import React, { useState, useMemo, useCallback } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';

import useData from 'context/Store';
import Layout from 'components/Layout';
import SkillGroup from 'containers/SkillGroup';
import getOwnedPokemon from '../../utils/getOwnedPokemon';
import getPokemonBackground from '../../utils/getPokemonBackground';

interface Props {
  id: number;
}

const SkillsTab: React.FC<Props> = ({ id }) => {
  const [editMode, setEditMode] = useState(false);
  const { trainer } = useData();

  const color = useMemo(() => getPokemonBackground(id), [id]);
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
      <Text style={[styles.sectionTitle, { color }]}>Fight</Text>
      <Layout.Stack size="small" />
      <SkillGroup
        groupName="fight"
        characterPath={characterPath}
        editable={editMode}
      />
      <Layout.Stack size="large" />
      <Layout.Stack size="large" />
      <Text style={[styles.sectionTitle, { color }]}>Survival</Text>
      <Layout.Stack size="small" />
      <SkillGroup
        groupName="survival"
        characterPath={characterPath}
        editable={editMode}
      />
      <Layout.Stack size="large" />
      <Layout.Stack size="large" />
      <Text style={[styles.sectionTitle, { color }]}>Social</Text>
      <Layout.Stack size="small" />
      <SkillGroup
        groupName="social"
        characterPath={characterPath}
        editable={editMode}
      />
    </View>
  );
};

export default SkillsTab;

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

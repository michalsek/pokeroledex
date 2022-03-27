import React, { useCallback, useLayoutEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, ListRenderItem } from 'react-native';

import useData from 'context/Store';
import Size from 'constants/Size';
import { Pokemons } from 'constants/Data';
import HeaderButton from 'components/HeaderButton';
import Layout from 'components/Layout';
import PokemonDialog from 'components/PokemonDialog';
import { RootTabScreenProps, OwnedPokemon, Trainer } from '../../types';
import ListItem from './ListItem';

const PokemonsScreen: React.FC<RootTabScreenProps<'Pokemons'>> = (props) => {
  const { navigation } = props;
  const [showAddModal, setShowAddModal] = useState(false);
  const { trainer, onUpdateTrainer } = useData();

  const onAddNewPokemon = useCallback(() => {
    setShowAddModal(true);
  }, [setShowAddModal]);

  const onCancelAddPokemon = useCallback(() => {
    setShowAddModal(false);
  }, [setShowAddModal]);

  const onSubmitPokemon = useCallback(
    (pokeNumInt: number) => {
      const basePokemon = Pokemons[pokeNumInt];

      if (isNaN(pokeNumInt) || !basePokemon) {
        Alert.alert("Couldn't find that pokemon!");
        return;
      }

      const newPokemon: OwnedPokemon = {
        number: pokeNumInt,
        attributes: {
          ...basePokemon.startingAttributes,
        },
        socialAttributes: {
          tough: 1,
          cool: 1,
          beauty: 1,
          clever: 1,
          cute: 1,
        },
        skills: {
          fight: {
            brawl: 0,
            throw: 0,
            evasion: 0,
            weapons: 0,
          },
          survival: {
            alert: 0,
            athletic: 0,
            nature: 0,
            stealth: 0,
          },
          social: {
            allure: 0,
            etiquette: 0,
            intimidate: 0,
            perform: 0,
          },
          knowledge: {
            crafts: 0,
            lore: 0,
            medicine: 0,
            science: 0,
          },
          extra: {},
        },
        happiness: 1,
        loyalty: 1,
        battleNumber: 0,
        victories: 0,
        actualHP: basePokemon.baseHP + basePokemon.startingAttributes.vitality,
        actualWill: 2, // TODO?
        rank: basePokemon.rank,
        nature: '',
        confidence: 0,
        accessory: '',
        moves: [],
      };

      const updatedTrainer: Trainer = {
        ...trainer,
        pokemonsOwned: [...trainer.pokemonsOwned, newPokemon],
      };

      onUpdateTrainer(updatedTrainer);
      setShowAddModal(false);
    },
    [onUpdateTrainer, setShowAddModal],
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderButton label="Add" onPress={onAddNewPokemon} />,
    });
  }, [onAddNewPokemon]);

  const renderPokemon: ListRenderItem<OwnedPokemon> = useCallback(
    ({ item }) => {
      return <ListItem pokemon={item} />;
    },
    [],
  );

  return (
    <Layout.Screen fullScreen>
      <FlatList
        data={trainer.pokemonsOwned}
        keyExtractor={(item, index) => `p-${item.number}-${index}`}
        renderItem={renderPokemon}
        style={styles.list}
      />
      <PokemonDialog
        visible={showAddModal}
        onCancel={onCancelAddPokemon}
        onSubmit={onSubmitPokemon}
      />
    </Layout.Screen>
  );
};

export default PokemonsScreen;

const styles = StyleSheet.create({
  list: {
    padding: Size.spacing.large,
  },
});

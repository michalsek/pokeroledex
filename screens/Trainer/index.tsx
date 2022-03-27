import React, { useLayoutEffect, useState } from 'react';
import { View } from 'react-native';

import HeaderButton from 'components/HeaderButton';
import SkillGroup from 'containers/SkillGroup';
import Avatar from 'components/Avatar';
import Layout from 'components/Layout';
import useData from 'context/Store';
import Form from 'containers/Form';
import { RootTabScreenProps } from '../../types';
import SocialAttributes from './SocialAttributes';
import Attributes from './Attributes';

const TrainerScreen: React.FC<RootTabScreenProps<'Trainer'>> = (props) => {
  const { navigation } = props;
  const [editMode, setEditMode] = useState(false);
  const { trainer } = useData();

  const onEditTrainer = () => {
    setEditMode(true);
  };

  const onEditDone = () => {
    setEditMode(false);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: trainer?.name ?? 'Trainer',
      headerRight: () => (
        <HeaderButton
          label={editMode ? 'Done' : 'Edit'}
          onPress={editMode ? onEditDone : onEditTrainer}
        />
      ),
    });
  }, [navigation, trainer?.name, editMode]);

  const characterPath = undefined;

  return (
    <Layout.Screen scrollable>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 2 }}>
          <Avatar source={require('assets/images/marnie.jpeg')} />
        </View>
        <View style={{ flex: 3 }}>
          <Form.HPInput characterPath={characterPath} editable={editMode} />
          <Layout.Stack size="small" />
          <Form.WillInput characterPath={characterPath} editable={editMode} />
          <Layout.Stack size="small" />
          <Form.MoneyInput characterPath={characterPath} editable={editMode} />
        </View>
      </View>
      <Layout.Stack size="small" />
      {editMode && (
        <>
          <Form.TextInput
            editable
            fieldName="name"
            characterPath={characterPath}
          />
          <Layout.Stack size="small" />
        </>
      )}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Attributes characterPath={characterPath} editMode={editMode} />
        <SocialAttributes characterPath={characterPath} editMode={editMode} />

        <View>
          <SkillGroup
            topRadius
            groupName="fight"
            characterPath={characterPath}
            editable={editMode}
          />
          <SkillGroup
            bottomRadius
            groupName="survival"
            characterPath={characterPath}
            editable={editMode}
          />
          <Layout.Stack size="small" />
          <SkillGroup
            topRadius
            groupName="social"
            characterPath={characterPath}
            editable={editMode}
          />
          <SkillGroup
            bottomRadius
            groupName="knowledge"
            characterPath={characterPath}
            editable={editMode}
          />
        </View>
      </View>
    </Layout.Screen>
  );
};

export default TrainerScreen;

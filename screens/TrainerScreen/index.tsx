import React, { useLayoutEffect, useState } from 'react';
import { View } from 'react-native';

import HeaderButton from 'components/HeaderButton';
import SkillGroup from 'containers/SkillGroup';
import Avatar from 'components/Avatar';
import Layout from 'components/Layout';
import Form from 'containers/Form';
import { RootTabScreenProps } from '../../types';

const TrainerScreen: React.FC<RootTabScreenProps<'Trainer'>> = (props) => {
  const [editMode, setEditMode] = useState(false);
  const { navigation } = props;

  const onEditTrainer = () => {
    setEditMode(true);
  };

  const onEditDone = () => {
    setEditMode(false);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          label={editMode ? 'Done' : 'Edit'}
          onPress={editMode ? onEditDone : onEditTrainer}
        />
      ),
    });
  }, [navigation, editMode]);

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
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: 120 }}>
          <Form.AttributeInput
            editable={editMode}
            attributeType="attributes"
            attributeValueName="strength"
            characterPath={characterPath}
          />
          <Layout.Stack size="small" />
          <Form.AttributeInput
            editable={editMode}
            attributeType="attributes"
            attributeValueName="dexterity"
            characterPath={characterPath}
          />
          <Layout.Stack size="small" />
          <Form.AttributeInput
            editable={editMode}
            attributeType="attributes"
            attributeValueName="vitality"
            characterPath={characterPath}
          />
          <Layout.Stack size="small" />
          <Form.AttributeInput
            editable={editMode}
            attributeType="attributes"
            attributeValueName="insight"
            characterPath={characterPath}
          />
        </View>
        <Layout.Queue size="small" />
        <View style={{ width: 120 }}>
          <Form.AttributeInput
            editable={editMode}
            attributeType="socialAttributes"
            attributeValueName="tough"
            characterPath={characterPath}
            backgroundColor="#f6e592"
          />
          <Layout.Stack size="small" />
          <Form.AttributeInput
            editable={editMode}
            attributeType="socialAttributes"
            attributeValueName="cool"
            characterPath={characterPath}
            backgroundColor="#f9ad8e"
          />
          <Layout.Stack size="small" />
          <Form.AttributeInput
            editable={editMode}
            attributeType="socialAttributes"
            attributeValueName="beauty"
            characterPath={characterPath}
            backgroundColor="#afc5df"
          />
          <Layout.Stack size="small" />
          <Form.AttributeInput
            editable={editMode}
            characterPath={characterPath}
            attributeType="socialAttributes"
            attributeValueName="clever"
            backgroundColor="#aed494"
          />
          <Layout.Stack size="small" />
          <Form.AttributeInput
            editable={editMode}
            attributeType="socialAttributes"
            attributeValueName="cute"
            characterPath={characterPath}
            backgroundColor="#f7b3c5"
          />
        </View>
      </View>

      <Layout.Stack size="small" />
      <View style={{ flexDirection: 'row' }}>
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
        </View>
        <Layout.Queue size="small" />
        <View>
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

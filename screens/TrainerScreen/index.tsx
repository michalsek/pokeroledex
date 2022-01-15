import React, { useLayoutEffect, useState } from 'react';
import { View, Text } from 'react-native';

import { RootTabScreenProps } from '../../types';
import HeaderButton from 'components/HeaderButton';
import Avatar from 'components/Avatar';
import Layout from 'components/Layout';
import Form from 'containers/Form';

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

  return (
    <Layout.Screen scrollable>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 2 }}>
          <Avatar source={require('assets/images/marnie.jpeg')} />
        </View>
        <View style={{ flex: 3 }}>
          <Form.HPInput characterPath="trainer" editable={editMode} />
          <Layout.Stack size="small" />
          <Form.WillInput characterPath="trainer" editable={editMode} />
        </View>
      </View>
    </Layout.Screen>
  );
};

export default TrainerScreen;

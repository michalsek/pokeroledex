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
        </View>
      </View>
    </Layout.Screen>
  );
  // return (

  //     <View
  //       style={{
  //         borderWidth: 4,
  //         borderRadius: 25,
  //         flexDirection: 'row',
  //         borderColor: '#414042',
  //         backgroundColor: '#fff',
  //       }}
  //     >
  //       <View style={{ flex: 1 }}>
  //         <Text
  //           style={{
  //             fontWeight: '700',
  //             textTransform: 'uppercase',
  //             paddingLeft: 13,
  //             fontSize: 12,
  //           }}
  //         >
  //           Name
  //         </Text>
  //         <Form.TextInput
  //           valuePath="trainer.name"
  //           style={{
  //             fontSize: 20,
  //             paddingHorizontal: 10,
  //             paddingBottom: 5,
  //           }}
  //         />
  //       </View>

  //       <View style={{ flex: 1 }}>
  //         <Text
  //           style={{
  //             fontWeight: '700',
  //             textTransform: 'uppercase',
  //             fontSize: 12,
  //             paddingLeft: 10,
  //           }}
  //         >
  //           Age
  //         </Text>
  //         <Form.NumberInput
  //           valuePath="trainer.age"
  //           style={{
  //             fontSize: 20,
  //             paddingHorizontal: 10,
  //             paddingBottom: 5,
  //           }}
  //         />
  //       </View>
  //     </View>
  //   </Layout.Screen>
  // );
};

export default TrainerScreen;

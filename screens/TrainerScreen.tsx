import React from 'react';

import Screen from '../components/Screen';
import Stack from '../components/Stack';
import TextInput from '../components/TextInput';
import NumberInput from '../components/NumberInput';
import { RootTabScreenProps } from '../types';

const TrainerScreen: React.FC<RootTabScreenProps<'Trainer'>> = (props) => {
  return (
    <Screen scrollable>
      <TextInput label="Name" valuePath="trainer.name" />

      <Stack size="medium" />
      <NumberInput label="Age" valuePath="trainer.age" />

      <Stack size="medium" />
      <TextInput label="Player" valuePath="trainer.player" />
      <Stack size="medium" />
      <TextInput label="Concept" valuePath="trainer.concept" />

      <Stack size="medium" />
      <TextInput label="Nature" valuePath="trainer.nature" />
      <Stack size="medium" />
      <NumberInput label="Confidence" valuePath="trainer.confidence" />

      <Stack size="medium" />
      <NumberInput label="Money" valuePath="trainer.money" />
    </Screen>
  );
};

export default TrainerScreen;

// box: {
//   flexDirection: 'row',
//   backgroundColor: '#fff',
//   borderColor: '#414042',
//   borderWidth: 4,
//   height: 50,
//   borderRadius: 15,
//   paddingHorizontal: 15,
// },
// box2: {
//   flexDirection: 'row',
//   backgroundColor: Colors.backgroundAlt,
//   borderColor: '#b24632',
//   borderBottomWidth: 4,
//   borderLeftWidth: 4,
//   borderRightWidth: 4,
//   padding: 5,
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   flex: 1,
//   borderBottomLeftRadius: 15,
//   borderBottomRightRadius: 15,
//   borderRadius: 15,
//   borderWidth: 4,
// },
// boxColumn: {
//   flex: 1,
// },
// boxColumn3: {
//   flex: 3,
// },
// label: {
//   fontWeight: '700',
//   textTransform: 'uppercase',
// },
// label2: {
//   color: '#fff',
//   fontWeight: '700',
//   textTransform: 'uppercase',
// },
// value: {
//   textAlign: 'right',
// },
// value2Wrapper: {
//   marginLeft: 15,
//   backgroundColor: '#fff',
//   borderRadius: 15,
//   paddingVertical: 5,
//   paddingHorizontal: 15,
// },
// box3: {
//   flex: 1,
//   backgroundColor: '#414042',
//   flexDirection: 'row',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   padding: 5,
//   borderRadius: 15,
//   marginBottom: 10,
// },
// box3Label: {
//   color: 'white',
//   textTransform: 'uppercase',
//   fontWeight: '800',
//   fontSize: 16,
//   marginRight: 5,
// },
// box3ValueWrapper: {
//   width: 40,
//   backgroundColor: '#fff',
//   padding: 5,
//   borderRadius: 10,
// },
// box3Value: {
//   textAlign: 'right',
//   color: '#414042',
//   fontSize: 16,
//   fontWeight: '600',
// },
// row: {
//   flexDirection: 'row',
//   alignItems: 'stretch',
// },
// box4: {
//   flex: 3,
//   backgroundColor: '#414042',
//   borderRadius: 15,
//   padding: 4,
// },
// box4Top: {
//   backgroundColor: '#fff',
//   borderRadius: 15,
// },
// box4Bottom: {
//   flexDirection: 'row',
//   paddingTop: 4,
//   alignItems: 'center',
//   justifyContent: 'space-between',
// },

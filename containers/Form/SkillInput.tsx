import React, { memo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { get, cloneDeep, set, times } from 'lodash';

import Dots from 'components/Dots';
import useData from 'context/Store';
import Colors from 'constants/Colors';
import Layout from 'components/Layout';
import translate from '../../utils/translate';
import getDataPath from '../../utils/getDataPath';

interface Props {
  maxValue?: number;
  editable?: boolean;
  characterPath?: string | string[];
  skillGroup: 'fight' | 'survival' | 'social' | 'knowledge' | 'extra';
  skillName: string;
}

interface ControlButtonProps {
  label: string;
  onPress: () => void;
  color?: string;
}

const ControlButton = memo(({ label, onPress, color }: ControlButtonProps) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.controlButton, { backgroundColor: color }]}>
      <Text style={styles.controlButtonText}>{label}</Text>
    </View>
  </TouchableOpacity>
));

const SkillInput: React.FC<Props> = (props) => {
  const {
    editable,
    maxValue = 5,
    characterPath,
    skillGroup,
    skillName,
  } = props;
  const { onUpdateTrainer, trainer } = useData();
  const dataPath = getDataPath(characterPath, skillGroup, skillName);

  const value = get(trainer, dataPath) ?? 0;

  const onLowerSkill = () => {
    const newData = cloneDeep(trainer);
    set(newData, dataPath, Math.max(0, value - 1));
    onUpdateTrainer(newData);
  };

  const onHigherSkill = () => {
    const newData = cloneDeep(trainer);
    set(newData, dataPath, Math.min(maxValue, value + 1));
    onUpdateTrainer(newData);
  };

  return (
    <View style={styles.container}>
      {editable && (
        <>
          <View style={styles.controls}>
            <ControlButton label="-" onPress={onLowerSkill} color="#e75535" />
            <Layout.Queue size="medium" />
            <ControlButton label="+" onPress={onHigherSkill} color="#aed494" />
          </View>
          <Layout.Queue size="large" />
        </>
      )}
      <Text style={styles.skillName}>
        {translate(['skills', skillGroup, skillName])}
      </Text>
      <Layout.Queue size="large" />
      <Text style={styles.skillValue}>{value}</Text>
      <Layout.Queue size="large" />
      <Dots value={value} maxValue={maxValue} size={16} />
    </View>
  );
};

export default SkillInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 20,
  },
  skillName: {
    fontSize: 14,
    fontWeight: '500',
    minWidth: 70,
    color: Colors.text,
  },
  skillValue: {
    fontSize: 14,
    color: '#000',
  },
  controls: {
    flexDirection: 'row',
  },
  controlButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});

// return (
//   <View style={{ alignItems: 'center' }}>
//     <View
//       style={{
//         flexDirection: 'row',
//         alignItems: 'center',
//         height: 15,
//       }}
//     >
//       {editable && (
//         <TouchableOpacity onPress={onLowerSkill}>
//           <View
//             style={{
//               backgroundColor: '#414042',
//               width: 15,
//               height: 15,
//               borderRadius: 10,
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}
//           >
//             <Text style={{ color: '#fff', fontSize: 10, fontWeight: '700' }}>
//               -
//             </Text>
//           </View>
//         </TouchableOpacity>
//       )}
//       <Text
//         style={{
//           color: '#fff',
//           textTransform: 'uppercase',
//           fontWeight: '700',
//           marginHorizontal: 3,
//           fontSize: 10,
//         }}
//       >
//         {translate(['skills', skillGroup, skillName])}
//       </Text>
//       {editable && (
//         <TouchableOpacity onPress={onHigherSkill}>
//           <View
//             style={{
//               backgroundColor: '#414042',
//               width: 15,
//               height: 15,
//               borderRadius: 10,
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}
//           >
//             <Text style={{ color: '#fff', fontSize: 10, fontWeight: '700' }}>
//               +
//             </Text>
//           </View>
//         </TouchableOpacity>
//       )}
//     </View>
//     <View style={{ flexDirection: 'row' }}>
//       {times(maxValue, (num) => (
//         <View
//           key={num}
//           style={{
//             width: 10,
//             height: 10,
//             backgroundColor: num + 1 <= value ? '#414042' : '#fff',
//             borderRadius: 5,
//           }}
//         />
//       ))}
//     </View>
//   </View>
// );

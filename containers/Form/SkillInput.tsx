import React, { memo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { get, cloneDeep, set, times } from 'lodash';

import Dots from 'components/Dots';
import Icon from 'components/Icon';
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
  iconName: string;
  onPress: () => void;
  color?: string;
}

const ControlButton = memo(
  ({ iconName, onPress, color }: ControlButtonProps) => (
    <TouchableOpacity onPress={onPress}>
      <Icon name={iconName} style={[styles.controlButton, { color: color }]} />
    </TouchableOpacity>
  ),
);

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
            <ControlButton
              iconName="minus-circle"
              onPress={onLowerSkill}
              color="#e75535"
            />
            <Layout.Queue size="medium" />
            <ControlButton
              iconName="plus-circle"
              onPress={onHigherSkill}
              color="#aed494"
            />
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
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

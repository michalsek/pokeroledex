import React, { memo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { get, cloneDeep, set, times } from 'lodash';

import useData from 'context/Store';
import Dots from 'components/Dots';
import Layout from 'components/Layout';
import translate from '../../utils/translate';
import getDataPath from '../../utils/getDataPath';
import Colors from 'constants/Colors';

interface Props {
  editable?: boolean;
  characterPath?: string | string[];
  attributeType: 'attributes' | 'socialAttributes';
  attributeValueName: string;
  maxValue?: number;
  color?: string;
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

const AttributeInput: React.FC<Props> = (props) => {
  const {
    editable,
    maxValue = 5,
    characterPath,
    attributeType,
    color = '#00b2c2',
    attributeValueName,
  } = props;
  const { onUpdateTrainer, trainer } = useData();
  const dataPath = getDataPath(
    characterPath,
    attributeType,
    attributeValueName,
  );

  const value = get(trainer, dataPath) ?? 0;

  const onLowerAttribute = () => {
    const newData = cloneDeep(trainer);

    set(newData, dataPath, Math.max(0, value - 1));

    onUpdateTrainer(newData);
  };

  const onHigherAttribute = () => {
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
              label="-"
              onPress={onLowerAttribute}
              color="#e75535"
            />
            <Layout.Queue size="medium" />
            <ControlButton
              label="+"
              onPress={onHigherAttribute}
              color="#aed494"
            />
          </View>
          <Layout.Queue size="large" />
        </>
      )}
      <Text style={styles.attributeName}>
        {translate([attributeType, attributeValueName])}
      </Text>
      <Layout.Queue size="large" />
      <Text style={styles.attributeValue}>{value}</Text>
      <Layout.Queue size="large" />
      <Dots value={value} maxValue={maxValue} frontColor={color} size={16} />
    </View>
  );
};

export default AttributeInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 20,
  },
  attributeName: {
    fontSize: 14,
    fontWeight: '500',
    minWidth: 60,
    color: Colors.text,
  },
  attributeValue: {
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

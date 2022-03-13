import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { get, cloneDeep, set, times } from 'lodash';

import useData from 'context/Store';
import translate from '../../utils/translate';
import getDataPath from '../../utils/getDataPath';

interface Props {
  editable?: boolean;
  characterPath?: string;
  attributeType: 'attributes' | 'socialAttributes';
  attributeValueName: string;
  maxValue?: number;
  backgroundColor?: string;
}

const AttributeInput: React.FC<Props> = (props) => {
  const {
    editable,
    maxValue = 5,
    characterPath,
    attributeType,
    backgroundColor = '#00b2c2',
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
    <View
      style={{
        borderWidth: 4,
        borderColor: '#414042',
        borderRadius: 40,
        backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
      }}
    >
      <View
        style={{
          marginBottom: 5,
          flexDirection: 'row',
          alignItems: 'center',
          height: 15,
        }}
      >
        {editable && (
          <TouchableOpacity onPress={onLowerAttribute}>
            <View
              style={{
                backgroundColor: '#414042',
                width: 15,
                height: 15,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ color: '#fff', fontSize: 10, fontWeight: '700' }}>
                -
              </Text>
            </View>
          </TouchableOpacity>
        )}
        <Text
          style={{
            color: '#414042',
            textTransform: 'uppercase',
            fontWeight: '700',
            marginHorizontal: 3,
            fontSize: 10,
          }}
        >
          {translate([attributeType, attributeValueName])}
        </Text>
        {editable && (
          <TouchableOpacity onPress={onHigherAttribute}>
            <View
              style={{
                backgroundColor: '#414042',
                width: 15,
                height: 15,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ color: '#fff', fontSize: 10, fontWeight: '700' }}>
                +
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
      <View style={{ flexDirection: 'row' }}>
        {times(maxValue, (num) => (
          <View
            key={num}
            style={{
              width: 15,
              height: 15,
              backgroundColor: num + 1 <= value ? '#414042' : '#fff',
              borderRadius: 8,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default AttributeInput;

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { get, cloneDeep, set, times } from 'lodash';

import useData from 'context/Store';
import translate from '../../utils/translate';

interface Props {
  maxValue?: number;
  editable?: boolean;
  characterPath: string;
  skillGroup: 'fight' | 'survival' | 'social' | 'knowledge' | 'extra';
  skillName: string;
}

const SkillInput: React.FC<Props> = (props) => {
  const {
    editable,
    maxValue = 5,
    characterPath,
    skillGroup,
    skillName,
  } = props;
  const { onUpdateData, ...data } = useData();

  const value = get(data, [characterPath, skillGroup, skillName]) ?? 0;

  const onLowerSkill = () => {
    const newData = cloneDeep(data);

    set(
      newData,
      [characterPath, skillGroup, skillName],
      Math.max(0, value - 1),
    );

    onUpdateData(newData);
  };

  const onHigherSkill = () => {
    const newData = cloneDeep(data);

    set(
      newData,
      [characterPath, skillGroup, skillName],
      Math.min(maxValue, value + 1),
    );

    onUpdateData(newData);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 15,
        }}
      >
        {editable && (
          <TouchableOpacity onPress={onLowerSkill}>
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
            color: '#fff',
            textTransform: 'uppercase',
            fontWeight: '700',
            marginHorizontal: 3,
            fontSize: 10,
          }}
        >
          {translate(['skills', skillGroup, skillName])}
        </Text>
        {editable && (
          <TouchableOpacity onPress={onHigherSkill}>
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
              width: 10,
              height: 10,
              backgroundColor: num + 1 <= value ? '#414042' : '#fff',
              borderRadius: 5,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default SkillInput;

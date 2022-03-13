import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { get, cloneDeep, set, toNumber } from 'lodash';

import useData from 'context/Store';
import getDataPath from '../../utils/getDataPath';

interface Props {
  editable?: boolean;
  characterPath?: string;
}

const WillInput: React.FC<Props> = (props) => {
  const { editable, characterPath } = props;
  const { onUpdateTrainer, trainer } = useData();
  const maxWillPath = getDataPath(characterPath, 'maxWill');
  const actWillPath = getDataPath(characterPath, 'actualWill');

  const maxWill = get(trainer, maxWillPath);
  const actualWill = get(trainer, actWillPath);

  const onChangeMaxWill = (newText: string) => {
    const newData = cloneDeep(trainer);
    const newMaxWill = toNumber(newText);

    set(newData, maxWillPath, newMaxWill);

    if (newMaxWill !== 0) {
      const newActualWill = Math.min(newMaxWill, actualWill);
      set(newData, actWillPath, toNumber(newActualWill));
    }

    onUpdateTrainer(newData);
  };

  const onLowerActualWill = () => {
    const newData = cloneDeep(trainer);
    set(newData, actWillPath, Math.max(0, actualWill - 1));
    onUpdateTrainer(newData);
  };

  const onHigherActualWill = () => {
    const newData = cloneDeep(trainer);
    set(newData, actWillPath, Math.min(maxWill, actualWill + 1));
    onUpdateTrainer(newData);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#414042',
        borderRadius: 40,
        paddingVertical: 5,
        paddingHorizontal: 5,
        height: 40,
        alignItems: 'stretch',
      }}
    >
      <Text
        style={{
          fontSize: editable ? 14 : 15,
          color: '#fff',
          fontWeight: '700',
          textTransform: 'uppercase',
          marginHorizontal: 10,
          alignSelf: 'center',
        }}
      >
        {editable ? 'Max Will' : 'Will'}
      </Text>
      {editable ? (
        <TextInput
          value={maxWill.toString()}
          onChangeText={onChangeMaxWill}
          style={{
            flex: 1,
            fontSize: 20,
            borderRadius: 15,
            flexDirection: 'row',
            backgroundColor: 'white',
            paddingHorizontal: 15,
          }}
        />
      ) : (
        <View
          style={{
            flex: 1,
            borderRadius: 15,
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity onPress={onLowerActualWill}>
            <View
              style={{
                backgroundColor: '#414042',
                width: 20,
                height: 20,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 5,
              }}
            >
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: '700' }}>
                -
              </Text>
            </View>
          </TouchableOpacity>
          <Text
            style={{
              flex: 1,
              fontSize: 24,
              textAlign: 'center',
            }}
          >{`${actualWill} / ${maxWill}`}</Text>
          <TouchableOpacity onPress={onHigherActualWill}>
            <View
              style={{
                backgroundColor: '#414042',
                width: 20,
                height: 20,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 5,
              }}
            >
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: '700' }}>
                +
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default WillInput;

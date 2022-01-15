import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { get, cloneDeep, set, toNumber } from 'lodash';

import useData from 'context/Store';

interface Props {
  editable?: boolean;
  characterPath: string;
}

const HPInput: React.FC<Props> = (props) => {
  const { editable, characterPath } = props;
  const { onUpdateData, ...data } = useData();

  const maxHP = get(data, [characterPath, 'maxHP']);
  const actualHP = get(data, [characterPath, 'actualHP']);

  const onChangeMaxHP = (newText: string) => {
    const newData = cloneDeep(data);
    const newMaxHP = toNumber(newText);

    set(newData, [characterPath, 'maxHP'], newMaxHP);

    if (newMaxHP !== 0) {
      const newActualHP = Math.min(newMaxHP, actualHP);
      set(newData, [characterPath, 'actualHP'], toNumber(newActualHP));
    }

    onUpdateData(newData);
  };

  const onLowerActualHP = () => {
    const newData = cloneDeep(data);

    set(newData, [characterPath, 'actualHP'], Math.max(0, actualHP - 1));

    onUpdateData(newData);
  };

  const onHigherActualHP = () => {
    const newData = cloneDeep(data);

    set(newData, [characterPath, 'actualHP'], Math.min(maxHP, actualHP + 1));

    onUpdateData(newData);
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
          fontSize: editable ? 18 : 24,
          color: '#fff',
          fontWeight: '700',
          textTransform: 'uppercase',
          marginHorizontal: 10,
          alignSelf: 'center',
        }}
      >
        {editable ? 'MAX HP' : 'HP'}
      </Text>
      {editable ? (
        <TextInput
          value={maxHP.toString()}
          onChangeText={onChangeMaxHP}
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
          <TouchableOpacity onPress={onLowerActualHP}>
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
          >{`${actualHP} / ${maxHP}`}</Text>
          <TouchableOpacity onPress={onHigherActualHP}>
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

export default HPInput;

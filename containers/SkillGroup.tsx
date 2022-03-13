import Form from 'containers/Form';
import React from 'react';
import { View, Text } from 'react-native';

import translate from '../utils/translate';

interface Props {
  groupName: 'fight' | 'survival' | 'social' | 'knowledge' | 'extra';
  topRadius?: boolean;
  bottomRadius?: boolean;
  editable?: boolean;
  characterPath?: string;
}

const mapGroupToSkills = {
  fight: ['brawl', 'throw', 'evasion', 'weapons'],
  survival: ['alert', 'athletic', 'nature', 'stealth'],
  social: ['allure', 'etiquette', 'intimidate', 'perform'],
  knowledge: ['crafts', 'lore', 'medicine', 'science'],
  extra: [],
};

const SkillGroup: React.FC<Props> = (props) => {
  const { groupName, topRadius, bottomRadius, editable, characterPath } = props;

  return (
    <View
      style={{
        flexDirection: 'row',
        width: 105,
        position: 'relative',
      }}
    >
      <View
        style={[
          {
            width: 80,
            zIndex: -1,
            right: -20,
            position: 'absolute',
            backgroundColor: '#b24632',
            paddingTop: 5,
            height: 40,
            alignSelf: 'center',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            transform: [{ rotate: '90deg' }],
          },
        ]}
      >
        <Text
          style={{
            color: '#fff',
            textTransform: 'uppercase',
            fontWeight: '700',
            fontSize: 10,
            lineHeight: 10,
            height: 11,
            textAlign: 'center',
          }}
        >
          {translate(['skills', groupName, 'groupName'])}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#c74b34',
          borderTopLeftRadius: topRadius ? 20 : 0,
          borderTopRightRadius: topRadius ? 20 : 0,
          borderBottomLeftRadius: bottomRadius ? 20 : 0,
          borderBottomRightRadius: bottomRadius ? 20 : 0,
          width: 90,
          paddingVertical: 10,
        }}
      >
        {mapGroupToSkills[groupName].map((skillName) => (
          <Form.SkillInput
            key={skillName}
            skillGroup={groupName}
            skillName={skillName}
            editable={editable}
            characterPath={characterPath}
          />
        ))}
      </View>
    </View>
  );
};

export default SkillGroup;

import React from 'react';

import Form from 'containers/Form';
import Layout from 'components/Layout';

interface Props {
  editable?: boolean;
  isPokemon?: boolean;
  characterPath?: string | string[];
  groupName: 'fight' | 'survival' | 'social' | 'knowledge' | 'extra';
}

const mapGroupToSkills = {
  fightCharacter: ['brawl', 'throw', 'evasion', 'weapons'],
  fightPokemon: ['brawl', 'channel', 'clash', 'evasion'],
  survival: ['alert', 'athletic', 'nature', 'stealth'],
  social: ['allure', 'etiquette', 'intimidate', 'perform'],
  knowledge: ['crafts', 'lore', 'medicine', 'science'],
  extra: [],
};

const SkillGroup: React.FC<Props> = (props) => {
  const { groupName, editable, characterPath, isPokemon } = props;

  const mapGroupName =
    groupName === 'fight'
      ? isPokemon
        ? 'fightPokemon'
        : 'fightCharacter'
      : groupName;

  return (
    <>
      {mapGroupToSkills[mapGroupName].map((skillName, index) => (
        <React.Fragment key={skillName}>
          <Form.SkillInput
            editable={editable}
            skillName={skillName}
            skillGroup={groupName}
            characterPath={characterPath}
          />
          {index !== mapGroupToSkills[mapGroupName].length - 1 && (
            <Layout.Stack size="small" />
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default SkillGroup;

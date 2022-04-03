import React from 'react';

import Form from 'containers/Form';
import Layout from 'components/Layout';

interface Props {
  editable?: boolean;
  characterPath?: string | string[];
  groupName: 'fight' | 'survival' | 'social' | 'knowledge' | 'extra';
}

const mapGroupToSkills = {
  fight: ['brawl', 'throw', 'evasion', 'weapons'],
  survival: ['alert', 'athletic', 'nature', 'stealth'],
  social: ['allure', 'etiquette', 'intimidate', 'perform'],
  knowledge: ['crafts', 'lore', 'medicine', 'science'],
  extra: [],
};

const SkillGroup: React.FC<Props> = (props) => {
  const { groupName, editable, characterPath } = props;

  return (
    <>
      {mapGroupToSkills[groupName].map((skillName, index) => (
        <React.Fragment key={skillName}>
          <Form.SkillInput
            editable={editable}
            skillName={skillName}
            skillGroup={groupName}
            characterPath={characterPath}
          />
          {index !== mapGroupToSkills[groupName].length - 1 && (
            <Layout.Stack size="small" />
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default SkillGroup;

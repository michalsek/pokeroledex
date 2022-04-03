import React, { useMemo } from 'react';

import Layout from 'components/Layout';
import Form from './Form';

interface Props {
  editable?: boolean;
  attributeType: 'attributes' | 'pokemonAttributes' | 'socialAttributes';
  characterPath?: string | string[];
  getMaxValue?: (attribute: string) => number;
}

const attributeColorMap: { [key: string]: string } = {
  tough: '#f6e592',
  cool: '#f9ad8e',
  beauty: '#afc5df',
  clever: '#aed494',
  cute: '#f7b3c5',
};

const Attributes: React.FC<Props> = (props) => {
  const { attributeType, editable, characterPath, getMaxValue } = props;

  const keys = useMemo(() => {
    if (attributeType === 'attributes') {
      return ['strength', 'dexterity', 'vitality', 'insight'];
    }

    if (attributeType === 'pokemonAttributes') {
      return ['strength', 'dexterity', 'vitality', 'special', 'insight'];
    }

    return ['tough', 'cool', 'beauty', 'clever', 'cute'];
  }, [attributeType]);

  return (
    <>
      {keys.map((key, index) => (
        <React.Fragment key={key}>
          <Form.AttributeInput
            editable={editable}
            attributeType={
              attributeType === 'socialAttributes'
                ? 'socialAttributes'
                : 'attributes'
            }
            attributeValueName={key}
            characterPath={characterPath}
            maxValue={getMaxValue ? getMaxValue(key) : 5}
            color={attributeColorMap[key] ?? undefined}
          />
          {index !== keys.length - 1 && <Layout.Stack size="small" />}
        </React.Fragment>
      ))}
    </>
  );
};

export default Attributes;

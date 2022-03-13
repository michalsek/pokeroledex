import React from 'react';
import { View, StyleSheet } from 'react-native';

import Layout from 'components/Layout';
import Form from 'containers/Form';

interface AttributesProps {
  editMode: boolean;
  characterPath?: string;
}

const Attributes: React.FC<AttributesProps> = ({ editMode, characterPath }) => (
  <View style={styles.container}>
    <Form.AttributeInput
      editable={editMode}
      attributeType="attributes"
      attributeValueName="strength"
      characterPath={characterPath}
    />
    <Layout.Stack size="small" />
    <Form.AttributeInput
      editable={editMode}
      attributeType="attributes"
      attributeValueName="dexterity"
      characterPath={characterPath}
    />
    <Layout.Stack size="small" />
    <Form.AttributeInput
      editable={editMode}
      attributeType="attributes"
      attributeValueName="vitality"
      characterPath={characterPath}
    />
    <Layout.Stack size="small" />
    <Form.AttributeInput
      editable={editMode}
      attributeType="attributes"
      attributeValueName="insight"
      characterPath={characterPath}
    />
  </View>
);

export default Attributes;

const styles = StyleSheet.create({
  container: { width: 120 },
});

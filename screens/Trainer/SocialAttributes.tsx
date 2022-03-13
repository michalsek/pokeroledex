import React from 'react';
import { View, StyleSheet } from 'react-native';

import Layout from 'components/Layout';
import Form from 'containers/Form';

interface SocialAttributesProps {
  editMode: boolean;
  characterPath?: string;
}

const SocialAttributes: React.FC<SocialAttributesProps> = ({
  editMode,
  characterPath,
}) => (
  <View style={{ width: 120 }}>
    <Form.AttributeInput
      editable={editMode}
      attributeType="socialAttributes"
      attributeValueName="tough"
      characterPath={characterPath}
      backgroundColor="#f6e592"
    />
    <Layout.Stack size="small" />
    <Form.AttributeInput
      editable={editMode}
      attributeType="socialAttributes"
      attributeValueName="cool"
      characterPath={characterPath}
      backgroundColor="#f9ad8e"
    />
    <Layout.Stack size="small" />
    <Form.AttributeInput
      editable={editMode}
      attributeType="socialAttributes"
      attributeValueName="beauty"
      characterPath={characterPath}
      backgroundColor="#afc5df"
    />
    <Layout.Stack size="small" />
    <Form.AttributeInput
      editable={editMode}
      characterPath={characterPath}
      attributeType="socialAttributes"
      attributeValueName="clever"
      backgroundColor="#aed494"
    />
    <Layout.Stack size="small" />
    <Form.AttributeInput
      editable={editMode}
      attributeType="socialAttributes"
      attributeValueName="cute"
      characterPath={characterPath}
      backgroundColor="#f7b3c5"
    />
  </View>
);

export default SocialAttributes;

const styles = StyleSheet.create({
  container: { width: 120 },
});

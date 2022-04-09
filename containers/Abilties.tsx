import React, { memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { capitalize } from 'lodash';

import Colors from 'constants/Colors';

interface Props {
  abilities: string[];
}

const Abilities: React.FC<Props> = ({ abilities }) => {
  return (
    <View style={styles.row}>
      {abilities.map((ability, index) => (
        <React.Fragment key={index}>
          <TouchableOpacity>
            <View>
              <Text style={styles.title}>{capitalize(ability)}</Text>
            </View>
          </TouchableOpacity>
          {index < abilities.length - 1 && (
            <Text style={styles.title}>{', '}</Text>
          )}
        </React.Fragment>
      ))}
    </View>
  );
};

export default Abilities;

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: Colors.text,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
});

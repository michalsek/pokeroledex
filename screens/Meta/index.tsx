import useData from 'context/Store';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackScreenProps } from '../../types';
import Colors from 'constants/Colors';
import Layout from 'components/Layout';
import { isEmpty } from 'lodash';

const MetaScreen: React.FC<RootStackScreenProps<'Meta'>> = (props) => {
  const { trainers, onAddTrainer, onClear } = useData();

  const onAddTrainerPress = async () => {
    props.navigation.navigate('Root');
    onAddTrainer();
  };

  const onCancel = () => {
    props.navigation.navigate('Root');
  };

  const onClearData = async () => {
    await onClear();
  };

  return (
    <Layout.Screen scrollable insets={['top', 'left', 'right']}>
      <TouchableOpacity onPress={onAddTrainerPress}>
        <View style={[styles.button, { borderColor: '#afc5df' }]}>
          <Text style={styles.buttonText}>Add Trainer</Text>
        </View>
      </TouchableOpacity>
      <Layout.Stack size="medium" />
      <TouchableOpacity onPress={onClearData}>
        <View style={[styles.button, { borderColor: '#d75b44' }]}>
          <Text style={styles.buttonText}>Wipe data</Text>
        </View>
      </TouchableOpacity>
      {!isEmpty(trainers) && (
        <>
          <Layout.Stack size="medium" />
          <TouchableOpacity onPress={onCancel}>
            <View style={[styles.button]}>
              <Text style={styles.buttonText}>Cancel</Text>
            </View>
          </TouchableOpacity>
        </>
      )}
    </Layout.Screen>
  );
};
export default MetaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: '#fff',
    borderColor: '#414042',
    borderWidth: 4,
    padding: 10,
    borderRadius: 30,
  },
  buttonText: {
    color: '#414042',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

import useData from 'context/Store';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { RootStackParamList } from '../../types';
import Colors from 'constants/Colors';
import Layout from 'components/Layout';

const MetaScreen: React.FC<RootStackParamList> = () => {
  const onClearData = async () => {
    await AsyncStorage.clear();
  };

  return (
    <Layout.Screen scrollable>
      <TouchableOpacity onPress={onClearData}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Wipe data</Text>
        </View>
      </TouchableOpacity>
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

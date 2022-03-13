import { StyleSheet, Text, View } from 'react-native';

import { RootTabScreenProps } from '../../types';

const ItemsScreen: React.FC<RootTabScreenProps<'Items'>> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Items</Text>
    </View>
  );
};

export default ItemsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

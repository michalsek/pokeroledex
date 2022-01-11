import { StyleSheet, Text, View } from 'react-native';

import { RootTabScreenProps } from '../types';

const PokemonsScreen: React.FC<RootTabScreenProps<'Pokemons'>> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokemons</Text>
    </View>
  );
};

export default PokemonsScreen;

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

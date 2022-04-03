import { StyleSheet, Text, View, ScrollView } from 'react-native';

interface Props {
  id: number;
}

const MovesTab: React.FC<Props> = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Moves</Text>
    </ScrollView>
  );
};

export default MovesTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

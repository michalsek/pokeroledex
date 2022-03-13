import { StyleSheet, Text, View } from 'react-native';

import { RootTabScreenProps } from '../../types';

const SocialLinksScreen: React.FC<RootTabScreenProps<'SocialLinks'>> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Social Links</Text>
    </View>
  );
};

export default SocialLinksScreen;

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

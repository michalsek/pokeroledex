import { Image, View, StyleSheet, ImageSourcePropType } from 'react-native';

interface AvatarProps {
  source: ImageSourcePropType;
}

const Avatar: React.FC<AvatarProps> = ({ source }) => {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
    borderWidth: 6,
    borderRadius: 10,
    borderColor: '#414042',
  },
  image: {
    borderRadius: 10,
    aspectRatio: 1,
    flex: 1,
  },
});

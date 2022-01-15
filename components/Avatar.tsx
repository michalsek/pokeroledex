import { Image, View, StyleSheet, ImageSourcePropType } from 'react-native';

interface AvatarProps {
  source: ImageSourcePropType;
}

const Avatar: React.FC<AvatarProps> = ({ source }) => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image source={source} style={styles.image} />
      </View>
      <View style={styles.bottomBorder} />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  imageContainer: {
    marginHorizontal: 8,
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
  bottomBorder: {
    zIndex: -1,
    marginTop: -6,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#b2b4b8',
  },
});

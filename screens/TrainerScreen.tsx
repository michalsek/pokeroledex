import { StyleSheet, View, Text } from 'react-native';

import Avatar from '../components/Avatar';
import Screen from '../components/Screen';
import Stack from '../components/Stack';
import Queue from '../components/Queue';
import Colors from '../constants/Colors';
import Size from '../constants/Size';
import { RootTabScreenProps } from '../types';

const TrainerScreen: React.FC<RootTabScreenProps<'Trainer'>> = () => {
  return (
    <Screen scrollable>
      <View style={styles.header}>
        <View style={styles.avatarWrapper}>
          <Avatar source={require('../assets/images/marnie.jpeg')} />
        </View>
        <View style={styles.basicInfo}>
          <View style={styles.box}>
            <View style={styles.boxColumn3}>
              <Text style={styles.label} numberOfLines={1}>
                Name
              </Text>
              <Text style={styles.value} numberOfLines={1}>
                Marnie
              </Text>
            </View>
            <Queue size="medium" />
            <View style={styles.boxColumn}>
              <Text style={styles.label} numberOfLines={1}>
                Age
              </Text>
              <Text style={styles.value} numberOfLines={1}>
                18
              </Text>
            </View>
          </View>
          <Stack size="medium" />
          <View style={styles.box2}>
            <Text style={styles.label2}>Rank</Text>
            <View style={styles.value2Wrapper}>
              <Text style={styles.value2}>Beginner</Text>
            </View>
          </View>
          <Stack size="medium" />
          <View style={styles.row}>
            <View style={styles.box3}>
              <Text style={styles.box3Label}>HP</Text>
              <View style={styles.box3ValueWrapper}>
                <Text style={styles.box3Value}>4</Text>
              </View>
            </View>
            <Queue size="small" />
            <View style={styles.box3}>
              <Text style={styles.box3Label}>Will</Text>
              <View style={styles.box3ValueWrapper}>
                <Text style={styles.box3Value}>8</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.box4}>
          <View
            style={[
              styles.box4Top,
              { paddingHorizontal: 10, paddingVertical: 4 },
            ]}
          >
            <Text style={styles.label}>Nature</Text>
            <Text style={[styles.value]}>Trouble maker</Text>
          </View>
          <View style={styles.box4Bottom}>
            <Text style={styles.box3Label}>Confidence</Text>
            <View style={styles.box3ValueWrapper}>
              <Text style={styles.box3Value}>8</Text>
            </View>
          </View>
        </View>
        <Queue size="medium" />
        <View style={[styles.box, { flex: 2, height: '100%' }]}>
          <View style={styles.boxColumn}>
            <Text style={styles.label} numberOfLines={1}>
              Money
            </Text>
            <Text style={[styles.value, { fontSize: 20 }]}>$1500</Text>
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default TrainerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
  },
  avatarWrapper: {
    flex: 2,
  },
  basicInfo: {
    paddingLeft: Size.spacing.large,
    flex: 3,
  },
  box: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: '#414042',
    borderWidth: 4,
    height: 50,
    borderRadius: 15,
    paddingHorizontal: 15,
  },

  box2: {
    flexDirection: 'row',
    backgroundColor: Colors.backgroundAlt,
    borderColor: '#b24632',
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderRadius: 15,
    borderWidth: 4,
  },
  boxColumn: {
    flex: 1,
  },
  boxColumn3: {
    flex: 3,
  },
  label: {
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  label2: {
    color: '#fff',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  value: {
    textAlign: 'right',
  },
  value2Wrapper: {
    marginLeft: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  value2: {},

  box3: {
    flex: 1,
    backgroundColor: '#414042',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderRadius: 15,
    marginBottom: 10,
  },
  box3Label: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: '800',
    fontSize: 16,
    marginRight: 5,
  },
  box3ValueWrapper: {
    width: 40,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 10,
  },
  box3Value: {
    textAlign: 'right',
    color: '#414042',
    fontSize: 16,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },

  box4: {
    flex: 3,
    backgroundColor: '#414042',
    borderRadius: 15,
    padding: 4,
  },
  box4Top: {
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  box4Bottom: {
    flexDirection: 'row',
    paddingTop: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

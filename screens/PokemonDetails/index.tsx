import { TabBar, TabView } from 'react-native-tab-view';
import React, { useCallback, useMemo, useState } from 'react';
import { SharedElement } from 'react-navigation-shared-element';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  withSpring,
  interpolate,
  Extrapolation,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import useData from 'context/Store';
import Colors from 'constants/Colors';
import PokemonImage from 'components/PokemonImage';
import { PokemonStackScreenProps } from '../../types';
import Header, { ExpnadedHeaderHeight, CollapsedHeaderHeight } from './Header';
import AttributesTab from './AttributesTab';
import SkillsTab from './SkillsTab';
import BasicTab from './BasicTab';
import InfoTab from './InfoTab';

const { width: screenWidth } = Dimensions.get('screen');

interface Route {
  key: 'basic' | 'attributes' | 'skills' | 'info';
  title: string;
}

const tabRoutes: Route[] = [
  { key: 'basic', title: 'Basics' },
  { key: 'attributes', title: 'Attributes' },
  { key: 'skills', title: 'Skills' },
  { key: 'info', title: 'Info' },
];

const renderLabel = ({
  route,
  focused,
}: {
  route: { title: string };
  focused: boolean;
}) => (
  <Text style={[styles.tabBarLabel, focused && styles.tabBarLabelActive]}>
    {route.title}
  </Text>
);

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    style={styles.tabBar}
    tabStyle={styles.tabBarTab}
    labelStyle={styles.tabBarLabel}
    indicatorStyle={styles.tabBarIndicator}
    renderLabel={renderLabel}
  />
);

const PokemonDetailsScreen: React.FC<
  PokemonStackScreenProps<'PokemonDetails'>
> = ({ route, navigation }) => {
  const { id } = route.params;
  const headerHeight = useSharedValue(ExpnadedHeaderHeight);
  const [isExpanded, setIsExpanded] = useState(true);
  const [tabIndex, setTabIndex] = useState(0);
  const { trainer } = useData();

  const onEditMoves = useCallback(() => {
    navigation.navigate('Moves', { id });
  }, [navigation, id]);

  const pokemon = useMemo(() => {
    return trainer.pokemonsOwned.find((p) => p.number === id);
  }, [trainer, id]);

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      headerHeight.value = isExpanded
        ? ExpnadedHeaderHeight + event.translationY
        : CollapsedHeaderHeight + event.translationY;
    })
    .onEnd((event) => {
      let toValue = (headerHeight.value = isExpanded
        ? ExpnadedHeaderHeight + event.translationY
        : CollapsedHeaderHeight + event.translationY);

      if (toValue > (ExpnadedHeaderHeight + CollapsedHeaderHeight) / 2) {
        toValue = ExpnadedHeaderHeight;
        runOnJS(setIsExpanded)(true);
      } else {
        toValue = CollapsedHeaderHeight;
        runOnJS(setIsExpanded)(false);
      }

      headerHeight.value = withSpring(toValue);
    });

  const headerStyles = useAnimatedStyle(() => {
    return {
      height: headerHeight.value,
    };
  });

  const pokeImageStyles = useAnimatedStyle(() => {
    const size = interpolate(
      headerHeight.value,
      [CollapsedHeaderHeight, ExpnadedHeaderHeight],
      [80, 180],
      Extrapolation.CLAMP,
    );

    const left = interpolate(
      headerHeight.value,
      [CollapsedHeaderHeight, ExpnadedHeaderHeight],
      [screenWidth - 100, (screenWidth - 180) / 2],
      Extrapolation.CLAMP,
    );

    const bottom = interpolate(
      headerHeight.value,
      [CollapsedHeaderHeight, ExpnadedHeaderHeight],
      [-5, -20],
      Extrapolation.CLAMP,
    );

    return {
      left,
      width: size,
      height: size,
      bottom,
    };
  });

  const renderScene = useCallback(
    ({ route }: { route: Route }) => {
      switch (route.key) {
        case 'basic': {
          return <BasicTab id={id} onEditMoves={onEditMoves} />;
        }
        case 'attributes': {
          return <AttributesTab id={id} />;
        }
        case 'skills': {
          return <SkillsTab id={id} />;
        }
        case 'info': {
          return <InfoTab id={id} />;
        }
      }
    },
    [id],
  );

  return (
    <GestureDetector gesture={panGesture}>
      <View style={styles.container}>
        <Header id={id} rank={pokemon!.rank} headerHeight={headerHeight} />
        <Animated.View style={[styles.content]}>
          <TabView
            renderTabBar={renderTabBar}
            navigationState={{
              index: tabIndex,
              routes: tabRoutes,
            }}
            renderScene={renderScene}
            onIndexChange={setTabIndex}
          />
        </Animated.View>
        <Animated.View style={[styles.headerFront, headerStyles]}>
          <SharedElement id={`pokemon.${id}.image`} style={styles.pokemonImage}>
            <PokemonImage id={id} style={pokeImageStyles} />
          </SharedElement>
        </Animated.View>
      </View>
    </GestureDetector>
  );
};

export default PokemonDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  headerFront: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  pokemonImage: {
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
  },
  content: {
    marginTop: -20,
    backgroundColor: Colors.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
    paddingTop: 35,
    flex: 1,
  },
  tabBar: {
    backgroundColor: 'transparent',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#00b2c2',
    height: 'auto',
    minHeight: 0,
  },
  tabBarLabel: {
    textTransform: 'capitalize',
    margin: 0,
    fontSize: 14,
    color: '#414042',
    height: 'auto',
    minHeight: 0,
  },
  tabBarLabelActive: {
    color: '#000',
  },
  tabBarTab: {
    height: 'auto',
    minHeight: 0,
    padding: 0,
    paddingBottom: 4,
    paddingLeft: 4,
    alignItems: 'flex-start',
  },
  tabBarIndicator: {
    backgroundColor: '#00b2c2',
  },
});

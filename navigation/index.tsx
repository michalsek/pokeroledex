import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  NavigationContainer,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { isEmpty } from 'lodash';

import Icon from 'components/Icon';
import useData from 'context/Store';
import Colors from 'constants/Colors';

import MetaScreen from 'screens/Meta';
import ItemsScreen from 'screens/Items';
import TrainerScreen from 'screens/Trainer';
import PokemonsScreen from 'screens/Pokemons';
import SocialLinksScreen from 'screens/SocialLinks';
import { RootStackParamList, RootTabParamList } from '../types';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Icon>['name'];
  color: string;
}) {
  return <Icon size={30} style={{ marginBottom: -3 }} {...props} />;
}

function TitleButton(props: { children: string }) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onPressHeader = () => {
    navigation.navigate('Meta');
  };

  return (
    <TouchableOpacity onPress={onPressHeader}>
      <Text style={{ color: '#fff', fontSize: 18 }}>{props.children}</Text>
    </TouchableOpacity>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Trainer"
      screenOptions={{
        tabBarActiveTintColor: Colors.textAlt,
        tabBarInactiveTintColor: Colors.textAltDisabled,
        headerTitle: (props) => <TitleButton {...props} />,
        headerBackground: () => (
          <View
            style={[
              StyleSheet.absoluteFill,
              {
                backgroundColor: Colors.backgroundAlt,
              },
            ]}
          />
        ),
        tabBarBackground: () => (
          <View
            style={[
              StyleSheet.absoluteFill,
              {
                backgroundColor: Colors.backgroundAlt,
              },
            ]}
          />
        ),
      }}
    >
      <BottomTab.Screen
        name="Trainer"
        component={TrainerScreen}
        options={{
          title: 'Trainer',
          tabBarLabel: 'Trainer',
          tabBarIcon: ({ color }) => <TabBarIcon name="AshHat" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Pokemons"
        component={PokemonsScreen}
        options={{
          title: 'Your pokemons',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="OpenPokeball" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Items"
        component={ItemsScreen}
        options={{
          title: 'Items',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="Bulbasaur" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="SocialLinks"
        component={SocialLinksScreen}
        options={{
          title: 'Social Links',
          tabBarIcon: ({ color }) => <TabBarIcon name="Zubat" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const data = useData();

  if (data.isLoading) {
    return <View></View>;
  }

  return (
    <Stack.Navigator
      initialRouteName={isEmpty(data.trainers) ? 'Meta' : 'Root'}
    >
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Meta"
        component={MetaScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

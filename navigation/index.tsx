import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Colors from '../constants/Colors';
import TrainerScreen from '../screens/TrainerScreen';
import PokemonsScreen from '../screens/PokemonsScreen';
import Icon from '../components/Icon';
import { RootStackParamList, RootTabParamList } from '../types';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Icon>['name'];
  color: string;
}) {
  return <Icon size={30} style={{ marginBottom: -3 }} {...props} />;
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Trainer"
      screenOptions={{
        tabBarActiveTintColor: Colors.textAlt,
        tabBarInactiveTintColor: Colors.textAltDisabled,
        headerTitleStyle: { color: Colors.textAlt },
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
    </BottomTab.Navigator>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
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

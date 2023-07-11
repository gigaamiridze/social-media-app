import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Profile } from '../screens';
import { Routes } from '../constants';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator screenOptions={{ header: () => null }}>
      <Drawer.Screen name={Routes.HOME} component={Home} />
      <Drawer.Screen name={Routes.PROFILE} component={Profile} />
    </Drawer.Navigator>
  )
}

function MainNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={Routes.HOME}
      screenOptions={{ header: () => null, headerShown: false }}
    >
      <Stack.Screen name='Drawer' component={DrawerNavigation} />
    </Stack.Navigator>
  )
}

export default MainNavigation;
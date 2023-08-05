import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigation from './DrawerNavigation';
import { Routes } from '../constants';

const Stack = createNativeStackNavigator();

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

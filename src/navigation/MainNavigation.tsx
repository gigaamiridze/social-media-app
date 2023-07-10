import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../constants';
import { Home, Profile } from '../screens';

const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={Routes.HOME}
      screenOptions={{ header: () => null, headerShown: false }}
    >
      <Stack.Screen name={Routes.HOME} component={Home} />
      <Stack.Screen name={Routes.PROFILE} component={Profile} />
    </Stack.Navigator>
  )
}

export default MainNavigation;
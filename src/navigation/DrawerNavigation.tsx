import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Profile, Messages } from '../screens';
import { Routes } from '../constants';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator screenOptions={{ header: () => null }}>
      <Drawer.Screen name={Routes.HOME} component={Home} />
      <Drawer.Screen name={Routes.PROFILE} component={Profile} />
      <Drawer.Screen name={Routes.MESSAGES} component={Messages} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation;

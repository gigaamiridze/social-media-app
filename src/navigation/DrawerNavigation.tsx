import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Profile, Messages } from '../screens';
import { DrawerLabel } from '../components';
import { Routes } from '../constants';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator screenOptions={{ header: () => null }}>
      <Drawer.Screen 
        name={Routes.HOME} 
        component={Home}
        options={{
          drawerLabel: ({ focused }) => (
            <DrawerLabel label='Home' isFocused={focused} />
          ),
        }} 
      />
      <Drawer.Screen 
        name={Routes.PROFILE} 
        component={Profile} 
        options={{
          drawerLabel: ({ focused }) => (
            <DrawerLabel label='Profile' isFocused={focused} />
          ),
        }}
      />
      <Drawer.Screen 
        name={Routes.MESSAGES} 
        component={Messages} 
        options={{
          drawerLabel: ({ focused }) => (
            <DrawerLabel label='Messages' isFocused={focused} />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation;

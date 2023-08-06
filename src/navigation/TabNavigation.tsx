import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Photos, Videos, Saved } from '../components';

const Tab = createMaterialTopTabNavigator();

function ProfileTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Photos' component={Photos} />
      <Tab.Screen name='Videos' component={Videos} />
      <Tab.Screen name='Saved' component={Saved} />
    </Tab.Navigator>
  )
}

export default ProfileTabs;

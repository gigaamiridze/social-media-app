import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Photos, Videos, Saved, TabTitle } from '../components';

const Tab = createMaterialTopTabNavigator();

function ProfileTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
        tabBarStyle: {
          elevation: 0,
          zIndex: 0,
        },
      }}
    >
      <Tab.Screen 
        name='Photos' 
        component={Photos}
        options={{
          tabBarLabel: ({ focused }) => {
            return <TabTitle title='Photos' isFocused={focused} />
          }
        }} 
      />
      <Tab.Screen 
        name='Videos' 
        component={Videos}
        options={{
          tabBarLabel: ({ focused }) => {
            return <TabTitle title='Videos' isFocused={focused} />
          }
        }} 
      />
      <Tab.Screen 
        name='Saved' 
        component={Saved}
        options={{
          tabBarLabel: ({ focused }) => {
            return <TabTitle title='Saved' isFocused={focused} />
          }
        }} 
      />
    </Tab.Navigator>
  )
}

export default ProfileTabs;

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from './navigation';

function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  )
}

export default App;

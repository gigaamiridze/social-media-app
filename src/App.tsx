import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Posts } from './components';

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ backgroundColor: '#FFFFFF' }}>
        <Posts />
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App;

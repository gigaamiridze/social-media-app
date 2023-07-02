import React from 'react';
import { SafeAreaView } from 'react-native';
import { Header, Stories, Posts } from './components';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{ backgroundColor: '#FFFFFF' }}>
      <Header />
      <Stories />
      <Posts />
    </SafeAreaView>
  )
}

export default App;
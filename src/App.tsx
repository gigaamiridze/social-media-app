import React from 'react';
import { SafeAreaView } from 'react-native';
import { Header, Stories } from './components';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Header />
      <Stories />
    </SafeAreaView>
  )
}

export default App;
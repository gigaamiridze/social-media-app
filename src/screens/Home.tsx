import React from 'react';
import { SafeAreaView } from 'react-native';
import { Posts } from '../components';

function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: '#FFFFFF' }}>
      <Posts />
    </SafeAreaView>
  )
}

export default Home;
import React from 'react';
import { SafeAreaView } from 'react-native';
import { globalStyle } from '../styles';
import { Posts } from '../components';

function Home() {
  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <Posts />
    </SafeAreaView>
  )
}

export default Home;

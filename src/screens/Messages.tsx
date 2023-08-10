import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { SearchInput } from '../components';
import { globalStyle } from '../styles';

function Messages() {
  return (
    <SafeAreaView
      style={
        [
          globalStyle.backgroundWhite,
          globalStyle.flex,
          globalStyle.screenContainer
        ]
      }
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchInput />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Messages;

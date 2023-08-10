import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
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
        <View>
          <Text>Messages</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Messages;

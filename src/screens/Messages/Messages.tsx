import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { SearchInput, MessageItem } from '../../components';
import { globalStyle } from '../../styles';
import { style } from './style';

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
        <View style={style.titlesContainer}>
          <Text style={style.messagesTitle}>Messages</Text>
          <Text style={style.messageQtyTitle}>(7)</Text>
        </View>
        <MessageItem />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Messages;

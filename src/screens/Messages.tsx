import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native';
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
        <View style={style.titlesContainer}>
          <Text style={style.messagesTitle}>Messages</Text>
          <Text style={style.messageQtyTitle}>(7)</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Messages;

const style = StyleSheet.create({
  titlesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 7,
    paddingTop: 25,
    paddingBottom: 15,
  },
  messagesTitle: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#102C56',
  },
  messageQtyTitle: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    color: '#FD92C6',
  },
});

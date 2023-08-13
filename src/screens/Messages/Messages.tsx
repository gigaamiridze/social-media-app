import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SearchInput, MessageItem } from '../../components';
import { IMessage } from '../../interfaces';
import { globalStyle } from '../../styles';
import { messages } from '../../data';
import { style } from './style';

function Messages() {
  const [filteredMessages, setFilteredMessages] = useState<IMessage[]>(messages);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = messages.filter(message => {
      return message.name.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredMessages(filtered);
  }

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      accessible={false}
    >
      <SafeAreaView
        style={
          [
            globalStyle.backgroundWhite,
            globalStyle.flex,
            globalStyle.screenContainer
          ]
        }
      >
        <SearchInput searchQuery={searchQuery} handleSearch={handleSearch} />
        <View style={style.titlesContainer}>
          <Text style={style.messagesTitle}>Messages</Text>
          <Text style={style.messageQtyTitle}>(7)</Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredMessages}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <MessageItem 
              message={item}
              isLast={index === filteredMessages.length - 1}
            />
          )}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default Messages;

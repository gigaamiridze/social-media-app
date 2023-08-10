import React from 'react';
import { View, Text } from 'react-native';
import { style } from './style';

function MessageItem() {
  return (
    <View style={style.messageItemContainer}>
      <View style={[style.contactAvatar, { backgroundColor: '#FA8659' }]}>
        <Text style={style.contactInitials}>LW</Text>
      </View>
      <Text>Message</Text>
    </View>
  )
}

export default MessageItem;

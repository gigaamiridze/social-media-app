import React from 'react';
import { View, Text } from 'react-native';
import { HorizontalLine } from '../../HorizontalLine';
import { style } from './style';

function MessageItem() {
  return (
    <View style={style.messageItemContainer}>
      <View style={[style.contactAvatar, { backgroundColor: '#fa2222' }]}>
        <Text style={style.contactInitials}>LW</Text>
      </View>
      <View style={style.contactDetails}>
        <View style={style.flexBlock}>
          <Text style={style.contactName}>Lewandowski</Text>
          <Text style={style.timeSend}>20:45</Text>
        </View>
        <Text style={style.messageContent}>Hello, Nice to meet you!</Text>
        <HorizontalLine />
      </View>
    </View>
  )
}

export default MessageItem;

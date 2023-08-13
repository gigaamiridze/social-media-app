import React from 'react';
import { View, Text } from 'react-native';
import { HorizontalLine } from '../../HorizontalLine';
import { IMessageItemProps } from '../../../interfaces';
import { style } from './style';

function MessageItem({ message, isLast }: IMessageItemProps) {
  const { initials, name, messageContent, timeSend, avatarColor } = message;
  
  return (
    <View style={style.messageItemContainer}>
      <View style={[style.contactAvatar, { backgroundColor: avatarColor }]}>
        <Text style={style.contactInitials}>{initials}</Text>
      </View>
      <View style={style.contactDetails}>
        <View style={style.flexBlock}>
          <Text style={style.contactName}>{name}</Text>
          <Text style={style.timeSend}>{timeSend}</Text>
        </View>
        <Text style={style.messageContent}>{messageContent}</Text>
        {!isLast && <HorizontalLine />}
      </View>
    </View>
  )
}

export default MessageItem;

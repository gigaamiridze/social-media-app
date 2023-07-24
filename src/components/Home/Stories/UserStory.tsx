import React from 'react';
import { View, Text } from 'react-native';
import { IUserStoryProps } from '../../../interfaces';
import { style } from './style';
import { UserImage } from '../UserImage';

function UserStory(props: IUserStoryProps) {
  return (
    <View style={style.userStoryContainer}>
      <UserImage />
      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  )
}

export default UserStory;
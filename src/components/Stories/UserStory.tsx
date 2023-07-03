import React from 'react';
import { View, Text } from 'react-native';
import { IUserStoryProps } from '../../interfaces';
import { style } from './style';
import { ProfileImage } from '../ProfileImage';

function UserStory(props: IUserStoryProps) {
  return (
    <View style={style.userStoryContainer}>
      <ProfileImage />
      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  )
}

export default UserStory;
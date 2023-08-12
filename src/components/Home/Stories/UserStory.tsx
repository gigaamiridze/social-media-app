import React from 'react';
import { View, Text } from 'react-native';
import { IUserFirstNameProp } from '../../../interfaces';
import { style } from './style';
import { UserImage } from '../UserImage';

function UserStory({ firstName }: IUserFirstNameProp) {
  return (
    <View style={style.userStoryContainer}>
      <UserImage firstName={firstName} />
      <Text style={style.firstName}>{firstName}</Text>
    </View>
  )
}

export default UserStory;

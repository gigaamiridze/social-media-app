import React from 'react';
import { View, Text, Image } from 'react-native';
import { IUserStoryProps } from '../../interfaces';
import { style } from './style';

function UserStory(props: IUserStoryProps) {
  return (
    <View style={style.userStoryContainer}>
      <View style={style.userImageWrapper}>
        <Image source={require('../../assets/images/default_profile.png')} />
      </View>
      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  )
}

export default UserStory;
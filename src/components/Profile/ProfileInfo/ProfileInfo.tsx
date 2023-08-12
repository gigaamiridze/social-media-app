import React from 'react';
import { View, Text, Image } from 'react-native';
import { style } from './style';
import { Statistic } from '../Statistic';

function ProfileInfo() {
  return (
    <View style={style.profileInfo}>
      <View style={style.profileImageWrapper}>
        <Image style={style.profileImage} source={require('../../../assets/images/users/olivier.jpg')} />
      </View>
      <Text style={style.fullName}>Emmanuel Robertsen</Text>
      <Statistic />
    </View>
  )
}

export default ProfileInfo;

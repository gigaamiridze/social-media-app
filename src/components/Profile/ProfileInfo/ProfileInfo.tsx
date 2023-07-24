import React from 'react';
import { View, Text, Image } from 'react-native';
import { style } from './style';

function ProfileInfo() {
  return (
    <View style={style.profileInfo}>
      <View style={style.profileImageWrapper}>
        <Image style={style.profileImage} source={require('../../../assets/images/default_profile.png')} />
      </View>
      <Text style={style.fullName}>Emmanuel Robertsen</Text>
    </View>
  )
}

export default ProfileInfo;

import React from 'react';
import { View, Image } from 'react-native';
import { style } from './style';

function ProfileInfo() {
  return (
    <View style={style.profileInfo}>
      <View style={style.profileImageWrapper}>
        <Image style={style.profileImage} source={require('../../../assets/images/default_profile.png')} />
      </View>
    </View>
  )
}

export default ProfileInfo;

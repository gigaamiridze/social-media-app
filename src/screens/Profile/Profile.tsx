import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { ProfileInfo, HorizontalLine } from '../../components';
import { ProfileTabs } from '../../navigation';
import { globalStyle } from '../../styles';
import { style } from './style';

function Profile() {
  return (
    <SafeAreaView 
      style={
        [
          globalStyle.backgroundWhite, 
          globalStyle.flex,
          globalStyle.screenContainer
        ]
      }
    >
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        style={style.profileScreenContainer}
      >
        <ProfileInfo />
        <HorizontalLine />
        <View style={style.tabsContainer}>
          <ProfileTabs />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile;

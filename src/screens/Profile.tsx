import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { ProfileInfo, HorizontalLine } from '../components';
import { ProfileTabs } from '../navigation';
import { globalStyle } from '../styles';

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

const style = StyleSheet.create({
  profileScreenContainer: {    
    paddingTop: 12,
  },
  tabsContainer: {
    height: 350,
    marginTop: 15,
  },
});

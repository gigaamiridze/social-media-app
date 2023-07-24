import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { ProfileInfo } from '../components';
import { globalStyle } from '../styles';

function Profile() {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView>
        <View style={style.profileScreenContainer}>
          <ProfileInfo />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile;

const style = StyleSheet.create({
  profileScreenContainer: {
    paddingTop: 32,
    paddingHorizontal: 20,
  },
});

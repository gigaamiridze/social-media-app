import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { globalStyle } from '../styles';

function Profile() {
  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <View>
        <Text>This is profile page</Text>
      </View>
    </SafeAreaView>
  )
}

export default Profile;
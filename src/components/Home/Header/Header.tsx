import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View, Pressable, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Routes } from '../../../constants';
import { Title } from '../Title';
import { style } from './style';

function Header() {
  const { navigate } = useNavigation();

  const navigateToProfileScreen = () => {
    navigate(Routes.PROFILE);
  }

  return (
    <ScrollView>
      <View style={style.header}>
        <Title title="Let's Explore" />
        <Pressable 
          style={style.messageIcon}
          onPress={navigateToProfileScreen}
        >
          <FontAwesomeIcon 
            icon={faEnvelope} 
            color='#CACDDE' 
            size={20} 
          />
          <View style={style.messageNumberWrapper}>
            <Text style={style.messageNumber}>2</Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  )
}

export default Header;
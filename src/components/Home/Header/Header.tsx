import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Title } from '../Title';
import { style } from './style';

function Header() {
  return (
    <ScrollView>
      <View style={style.header}>
        <Title title="Let's Explore" />
        <View style={style.messageIcon}>
          <FontAwesomeIcon 
            icon={faEnvelope} 
            color='#CACDDE' 
            size={20} 
          />
          <View style={style.messageNumberWrapper}>
            <Text style={style.messageNumber}>2</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Header;
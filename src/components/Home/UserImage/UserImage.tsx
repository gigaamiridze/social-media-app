import React from 'react';
import { View, Image } from 'react-native';
import { IUserFirstNameProp, IImageMapping } from '../../../interfaces';
import { style } from './style';

function UserImage({ firstName }: IUserFirstNameProp) {
  const BASE_URL = '../../../assets/images/users';

  const imageMapping: IImageMapping = {
    'Joseph': require(`${BASE_URL}/joseph.jpg`),
    'Angel': require(`${BASE_URL}/angel.jpg`),
    'White': require(`${BASE_URL}/white.jpg`),
    'Olivier': require(`${BASE_URL}/olivier.jpg`),
    'Giga': require(`${BASE_URL}/giga.jpg`),
    'Felix': require(`${BASE_URL}/felix.jpg`),
    'Justin': require(`${BASE_URL}/justin.jpg`),
    'Travis': require(`${BASE_URL}/travis.jpg`),
    'Don': require(`${BASE_URL}/don.jpg`),
    'Sean': require(`${BASE_URL}/sean.jpg`),
  };

  const imageSource = imageMapping[firstName] || require(`${BASE_URL}/default_profile.png`);
  
  return (
    <View style={style.userImageWrapper}>
      <Image source={imageSource} style={style.userImage} />
    </View>
  )
}

export default UserImage;
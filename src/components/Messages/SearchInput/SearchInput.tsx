import React from 'react';
import { View, Image, TextInput } from 'react-native';
import { style } from './style';

function SearchInput() {
  return (
    <View style={style.searchContainer}>
      <Image source={require('../../../assets/images/search-icon.png')} />
      <TextInput
        style={style.inputField}
        placeholder='Search...'
      />
    </View>
  )
}

export default SearchInput;

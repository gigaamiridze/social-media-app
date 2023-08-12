import React from 'react';
import { View, Image, TextInput } from 'react-native';
import { style } from './style';

export interface ISearchInputProps {
  searchQuery: string;
  handleSearch: (query: string) => void;
}

function SearchInput(props: ISearchInputProps) {
  const { searchQuery, handleSearch } = props;

  return (
    <View style={style.searchContainer}>
      <Image source={require('../../../assets/images/search-icon.png')} />
      <TextInput
        style={style.inputField}
        placeholder='Search...'
        value={searchQuery}
        onChangeText={(text) => handleSearch(text)}
      />
    </View>
  )
}

export default SearchInput;

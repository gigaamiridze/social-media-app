import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { stories } from '../../data';
import { style } from './style';
import UserStory from './UserStory';

function Stories() {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [renderedData, setRenderedData] = useState<[]>([]);
  const pageSize: number = 4;

  return (
    <View style={style.storiesContainer}>
      <FlatList 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={stories}
        renderItem={({item}) => <UserStory firstName={item.firstName} />}
      />
    </View>
  )
}

export default Stories;
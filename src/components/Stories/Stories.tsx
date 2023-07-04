import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { IStory } from '../../interfaces';
import { stories } from '../../data';
import { style } from './style';
import UserStory from './UserStory';

function Stories() {
  const pageSize: number = 4;
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [renderedData, setRenderedData] = useState<IStory[]>(stories.slice(0, pageSize));

  const pagination = (data: IStory[], pageNumber: number, pageSize: number) => {
    const startIndex = (pageNumber - 1) * pageSize;
    
    if (startIndex > data.length) {
      return [];
    }

    setPageNumber(pageNumber);
    return data.slice(startIndex, startIndex + pageSize);
  }

  return (
    <View style={style.storiesContainer}>
      <FlatList 
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (!isLoading) {
            setIsLoading(true);
            setRenderedData(prev => [
              ...prev,
              ...pagination(stories, pageNumber + 1, pageSize),
            ]);
            setIsLoading(false);
          }
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        data={renderedData}
        renderItem={({item}) => <UserStory firstName={item.firstName} />}
      />
    </View>
  )
}

export default Stories;
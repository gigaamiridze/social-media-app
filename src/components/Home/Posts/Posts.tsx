import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { IPost } from '../../../interfaces';
import { pagination } from '../../../utils';
import { posts } from '../../../data';
import { Header, Stories, UserPost } from '../../../components';

function Posts() {
  const pageSize: number = 2;
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [renderedData, setRenderedData] = useState<IPost[]>(posts.slice(0, pageSize));

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <Header />
          <Stories />
        </>
      }
      onMomentumScrollBegin={() => setIsLoading(false)}
      onEndReachedThreshold={0.5}
      onEndReached={() => {
        if (!isLoading) {
          setIsLoading(true);
          setRenderedData(prev => [
            ...prev,
            ...pagination(posts, pageNumber + 1, pageSize, true, undefined, setPageNumber),
          ]);
          setIsLoading(false);
        }
      }}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      data={renderedData}
      renderItem={({item}) => {
        const { firstName, lastName, location, likes, comments, bookmarks } = item;

        return (
          <UserPost 
            firstName={firstName}
            lastName={lastName}
            location={location}
            likes={likes}
            comments={comments}
            bookmarks={bookmarks}
          />
        )
      }}
    />
  )
}

export default Posts;
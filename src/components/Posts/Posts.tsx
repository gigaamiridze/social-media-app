import React from 'react';
import { FlatList, View } from 'react-native';
import { posts } from '../../data';
import { style } from './style';
import UserPost from './UserPost';

function Posts() {
  return (
    <View style={style.postsContainer}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        data={posts}
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
    </View>
  )
}

export default Posts;
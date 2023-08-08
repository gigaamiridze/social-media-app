import React from 'react';
import { ScrollView, View, Image } from 'react-native';
import { style } from './style';

function TabPosts() {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={style.tabPostsContainer}
    >
      <View style={style.imagesContainer}>
        <Image 
          style={style.tabImage}
          resizeMode='contain'
          source={require('../../../assets/images/default_post.png')}
        />
        <Image 
          style={style.tabImage}
          resizeMode='contain'
          source={require('../../../assets/images/default_post.png')}
        />
      </View>
      <View style={[style.imagesContainer, style.imageUpcomingRowsContainer]}>
        <Image 
          style={style.tabImage}
          resizeMode='contain'
          source={require('../../../assets/images/default_post.png')}
        />
        <Image 
          style={style.tabImage}
          resizeMode='contain'
          source={require('../../../assets/images/default_post.png')}
        />
      </View>
      <View style={[style.imagesContainer, style.imageUpcomingRowsContainer]}>
        <Image 
          style={style.tabImage}
          resizeMode='contain'
          source={require('../../../assets/images/default_post.png')}
        />
        <Image 
          style={style.tabImage}
          resizeMode='contain'
          source={require('../../../assets/images/default_post.png')}
        />
      </View>
      <View 
        style={[
          style.imagesContainer, 
          style.imageUpcomingRowsContainer,
          style.lastImageContainer
        ]}
        >
        <Image 
          style={style.tabImage}
          resizeMode='contain'
          source={require('../../../assets/images/default_post.png')}
        />
        <Image 
          style={style.tabImage}
          resizeMode='contain'
          source={require('../../../assets/images/default_post.png')}
        />
      </View>
    </ScrollView>
  )
}

export default TabPosts;

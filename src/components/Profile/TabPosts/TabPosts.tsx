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
          resizeMode='contain'
          source={require('../../../assets/images/posts/gaming.jpg')}
          style={style.tabImage}
        />
        <Image 
          resizeMode='contain'
          source={require('../../../assets/images/posts/reading.jpg')}
          style={style.tabImage}
        />
      </View>
      <View style={[style.imagesContainer, style.imageUpcomingRowsContainer]}>
        <Image 
          resizeMode='contain'
          source={require('../../../assets/images/posts/coding.jpg')}
          style={style.tabImage}
        />
        <Image 
          resizeMode='contain'
          source={require('../../../assets/images/posts/new-york.jpg')}
          style={style.tabImage}
        />
      </View>
      <View style={[style.imagesContainer, style.imageUpcomingRowsContainer]}>
        <Image 
          resizeMode='contain'
          source={require('../../../assets/images/posts/skateboarding.jpg')}
          style={style.tabImage}
        />
        <Image 
          resizeMode='contain'
          source={require('../../../assets/images/posts/sea-beach.jpg')}
          style={style.tabImage}
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
          resizeMode='contain'
          source={require('../../../assets/images/posts/neon.jpg')}
          style={style.tabImage}
        />
        <Image 
          resizeMode='contain'
          source={require('../../../assets/images/posts/passion.jpg')}
          style={style.tabImage}
        />
      </View>
    </ScrollView>
  )
}

export default TabPosts;

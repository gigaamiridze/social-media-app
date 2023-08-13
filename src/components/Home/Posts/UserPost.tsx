// import React from 'react';
import { Image, Text, View, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { IUserPostProps, IImageMapping } from '../../../interfaces';
import { HorizontalLine, UserImage } from '../../../components';
import { style } from './style';

function UserPost(props: IUserPostProps) {
  const { firstName, lastName, location, likes, comments, bookmarks } = props;

  const BASE_URL = '../../../assets/images/posts';

  const imageMapping: IImageMapping = {
    'Allison': require(`${BASE_URL}/neon.jpg`),
    'Jennifer': require(`${BASE_URL}/passion.jpg`),
    'Adam': require(`${BASE_URL}/skateboarding.jpg`),
    'Nata': require(`${BASE_URL}/new-york.jpg`),
    'Nicolas': require(`${BASE_URL}/sea-beach.jpg`),
    'Giga': require(`${BASE_URL}/coding.jpg`),
  };

  const imageSource = imageMapping[firstName] || require(`${BASE_URL}/default_post.png`);

  return (
    <View style={style.postContainer}>
      <View style={style.postHeaderContainer}>
        <View style={style.userInformation}>
          <UserImage firstName={firstName} />
          <View>
            <Text style={style.name}>
              {firstName} {lastName}
            </Text>
            {location && (
              <Text style={style.location}>
                {location}
              </Text>
            )}
          </View>
        </View>
        <Pressable>
          <FontAwesomeIcon icon={faEllipsis} color='#79869F' size={20} />
        </Pressable>
      </View>
      <Image
        resizeMode='cover'
        source={imageSource}
        style={style.postImage}
      />
      <View style={style.statisticsContainer}>
        <Pressable style={style.statisticWrapper}>
          <Image source={require('../../../assets/images/heart.png')} />
          <Text style={style.statisticNumber}>{likes}</Text>
        </Pressable>
        <Pressable style={style.statisticWrapper}>
          <Image source={require('../../../assets/images/comment.png')} />
          <Text style={style.statisticNumber}>{comments}</Text>
        </Pressable>
        <Pressable style={style.statisticWrapper}>
          <Image source={require('../../../assets/images/bookmark.png')} />
          <Text style={style.statisticNumber}>{bookmarks}</Text>
        </Pressable>
      </View>
      <HorizontalLine />
    </View>
  )
}

export default UserPost;
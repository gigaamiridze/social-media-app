import React from 'react';
import { Image, Text, View } from 'react-native';
import { IUserPostProps } from '../../interfaces';
import { style } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { ProfileImage } from '../ProfileImage';

function UserPost(props: IUserPostProps) {
  const { firstName, lastName, location, likes, comments, bookmarks } = props;

  return (
    <View style={style.postContainer}>
      <View style={style.postHeaderContainer}>
        <View style={style.userInformation}>
          <ProfileImage />
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
        <FontAwesomeIcon icon={faEllipsis} color='#79869F' size={20} />
      </View>
      <Image
        resizeMode='cover'
        source={require('../../assets/images/default_post.png')}
        style={style.postImage}
      />
      <View style={style.statisticsContainer}>
        <View style={style.statisticWrapper}>
          <Image source={require('../../assets/images/heart.png')} />
          <Text style={style.statisticNumber}>{likes}</Text>
        </View>
        <View style={style.statisticWrapper}>
          <Image source={require('../../assets/images/comment.png')} />
          <Text style={style.statisticNumber}>{comments}</Text>
        </View>
        <View style={style.statisticWrapper}>
          <Image source={require('../../assets/images/bookmark.png')} />
          <Text style={style.statisticNumber}>{bookmarks}</Text>
        </View>
      </View>
    </View>
  )
}

export default UserPost;
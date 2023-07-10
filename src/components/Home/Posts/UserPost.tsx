import React from 'react';
import { Image, Text, View, Pressable } from 'react-native';
import { IUserPostProps } from '../../../interfaces';
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
        <Pressable>
          <FontAwesomeIcon icon={faEllipsis} color='#79869F' size={20} />
        </Pressable>
      </View>
      <Image
        resizeMode='cover'
        source={require('../../../assets/images/default_post.png')}
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
    </View>
  )
}

export default UserPost;
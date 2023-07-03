import React from 'react';
import { Image, Text, View } from 'react-native';
import { IUserPostProps } from '../../interfaces';
import { style } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

function UserPost(props: IUserPostProps) {
  const { firstName, lastName, location, likes, comments, bookmarks } = props;

  return (
    <View style={style.postContainer}>
      <View style={style.postHeaderContainer}>
        <View style={style.userInformation}>
          <View style={style.userImageWrapper}>
            <Image source={require('../../assets/images/default_profile.png')} />
          </View>
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
    </View>
  )
}

export default UserPost;
import React from 'react';
import { View, Text } from 'react-native';
import { style } from './style';

function Statistic() {
  return (
    <View style={style.profileStatsContainer}>
      <View style={style.singleStatsContainer}>
        <Text style={style.statNumber}>45</Text>
        <Text style={style.statText}>Following</Text>
      </View>
      <View style={style.statDivider}></View>
      <View style={style.singleStatsContainer}>
        <Text style={style.statNumber}>30M</Text>
        <Text style={style.statText}>Followers</Text>
      </View>
      <View style={style.statDivider}></View>
      <View style={style.singleStatsContainer}>
        <Text style={style.statNumber}>100</Text>
        <Text style={style.statText}>Posts</Text>
      </View>
    </View>
  )
}

export default Statistic;

import React from 'react';
import { Text } from 'react-native';
import { ITitleProps } from '../../interfaces';
import { style } from './style';

function Title(props: ITitleProps) {
  return (
    <Text style={style.title}>
      {props.title}
    </Text>
  )
}

export default Title;
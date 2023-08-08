import React from 'react';
import { Text } from 'react-native';
import { ITabTitleProps } from '../../../interfaces';
import { style } from './style';

function TabTitle(props: ITabTitleProps) {
  const { title, isFocused } = props;

  return (
    <Text 
      style={[
        style.title,
        {
          color: isFocused ? '#022150' : '#79869F',
          fontWeight: isFocused ? '500' : '400',
        }
      ]}
    >
      {title}
    </Text>
  )
}

export default TabTitle;

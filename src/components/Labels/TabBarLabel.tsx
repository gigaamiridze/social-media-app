import React from 'react';
import { Text } from 'react-native';
import { ILabelProps } from '../../interfaces';
import { style } from './style';

function TabBarLabel(props: ILabelProps) {
  const { label, isFocused } = props;

  return (
    <Text 
      style={[
        style.label,
        {
          color: isFocused ? '#022150' : '#79869F',
          fontWeight: isFocused ? '500' : '400',
        }
      ]}
    >
      {label}
    </Text>
  )
}

export default TabBarLabel;

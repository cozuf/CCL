import React, {FC} from 'react';
import {ColorValue, View} from 'react-native';

export interface IVerticalProps {
  width?: 'small' | 'medium' | 'high' | string | number;
  height?: number;
  color?: ColorValue;
}

const Vertical: FC<IVerticalProps> = ({
  height = 8,
  width = 'small',
  color = 'transparent',
}) => {
  const calculateWidth = () => {
    if (typeof width === 'number') {
      return width;
    }
    switch (width) {
      case 'small':
        return 2;
      case 'medium':
        return 4;
      case 'high':
        return 8;
    }
    if (typeof width === 'string') {
      return width;
    }
  };
  return (
    <View
      style={{height: height, width: calculateWidth(), backgroundColor: color}}
    />
  );
};

export default Vertical;

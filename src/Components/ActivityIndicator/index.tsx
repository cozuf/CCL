import React, {FC} from 'react';
import {ColorValue, ActivityIndicator} from 'react-native';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

export interface IActivityIndicatorProps {
  type:
    | 'Default'
    | 'BallIndicator'
    | 'BarIndicator'
    | 'DotIndicator'
    | 'MaterialIndicator'
    | 'PacmanIndicator'
    | 'PulseIndicator'
    | 'SkypeIndicator'
    | 'UIActivityIndicator'
    | 'WaveIndicator';
  color?: ColorValue;
  size?: number;
}

const NActivityIndicator: FC<IActivityIndicatorProps> = ({
  type = 'Default',
  color = '#27190E',
  size = 24,
}) => {
  switch (type) {
    case 'BallIndicator':
      return <BallIndicator color={color} size={size} />;
    case 'BarIndicator':
      return <BarIndicator color={color} size={size} />;
    case 'DotIndicator':
      return <DotIndicator color={color} size={size} />;
    case 'MaterialIndicator':
      return <MaterialIndicator color={color} size={size} />;
    case 'PacmanIndicator':
      return <PacmanIndicator color={color} size={size} />;
    case 'PulseIndicator':
      return <PulseIndicator color={color} size={size} />;
    case 'SkypeIndicator':
      return <SkypeIndicator color={color} size={size} />;
    case 'UIActivityIndicator':
      return <UIActivityIndicator color={color} size={size} />;
    case 'WaveIndicator':
      return <WaveIndicator color={color} size={size} />;
    default:
      return (
        <ActivityIndicator color={color} size={size > 15 ? 'large' : 'small'} />
      );
  }
};

export default NActivityIndicator;

import React, {FC} from 'react';
import {
  Text as NativeText,
  TextProps as NativeTextProps,
  TextStyle,
  useColorScheme,
} from 'react-native';
import {FONTS} from '../../Assets';
import {dark, light} from '../../Theme/Variants';
interface ITextProps {
  active?: boolean;
  style?: TextStyle;
}

const Text: FC<ITextProps & NativeTextProps> = ({
  active = true,
  style,
  children,
  ...props
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const COLOR = isDarkMode
    ? active
      ? dark.text?.active
      : dark.text?.passive
    : active
    ? light.text?.active
    : light.text?.passive;
  return (
    <NativeText
      style={[{fontFamily: FONTS.regular, color: COLOR}, style]}
      {...props}>
      {children}
    </NativeText>
  );
};

export default Text;

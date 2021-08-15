import React, {FC} from 'react';
import {
  StyleProp,
  Text as NativeText,
  TextProps as NativeTextProps,
  TextStyle,
  useColorScheme,
} from 'react-native';
import {FONTS} from '../../Assets';
import {dark, light} from '../../Theme/Variants';
interface ITextProps {
  style?: StyleProp<TextStyle>;
}

const Text: FC<ITextProps & NativeTextProps> = ({
  style,
  children,
  ...props
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const COLOR = isDarkMode ? dark.text : light.text;
  return (
    <NativeText
      style={[{fontFamily: FONTS.regular, color: COLOR}, style]}
      {...props}>
      {children}
    </NativeText>
  );
};

export default Text;

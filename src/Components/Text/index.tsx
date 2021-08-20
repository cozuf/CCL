import React, {FC} from 'react';
import {
  Omit,
  StyleProp,
  Text as NativeText,
  TextProps as NativeTextProps,
  TextStyle,
  useColorScheme,
} from 'react-native';
import {FONTS} from '../../Assets';
import {dark, light} from '../../Theme/Variants';

export interface ITextProps {
  /**
   * Text Sizes
   */
  size?: 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

  /**
   * enable or disable
   * @default true
   */
  active?: boolean;

  /**
   * @see https://reactnative.dev/docs/text#style
   */
  style?: StyleProp<TextStyle>;
}

export type ITextTypes = ITextProps & Omit<NativeTextProps, 'style'>;

const Text: FC<ITextTypes> = ({active = true, style, children, ...props}) => {
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

// TODO: pasif durum için tıklanmayı engelle

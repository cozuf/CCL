import React, {FC, isValidElement, ReactNode} from 'react';
import {
  PressableProps,
  TouchableOpacityProps,
  TouchableOpacity,
  Pressable,
  StyleProp,
  ViewStyle,
  StyleSheet,
  FlexAlignType,
  useColorScheme,
  ColorValue,
  TextStyle,
} from 'react-native';
import {} from 'react-native-gesture-handler';
import {Icon, IIconProps, Text} from '..';
import {FONTS} from '../../Assets';
import {TOKENS} from '../../Theme';
import {dark, light} from '../../Theme/Variants';

export interface IButtonProps {
  clickType?: 'Opacity' | 'Changeable';
  type?: 'Filled' | 'Outlined' | 'Simplied';
  wrap?: 'wrap' | 'no-wrap' | 'free';
  onPress: () => void;
  icon?: IIconProps | ReactNode;
  title?: string;
  titleStyle: StyleProp<TextStyle>;
  containerStyle: StyleProp<ViewStyle>;
}

const Button: FC<IButtonProps & (TouchableOpacityProps | PressableProps)> = ({
  clickType = 'Opacity',
  type = 'Filled',
  wrap = 'no-wrap',
  title = 'Button',
  icon,
  titleStyle,
  containerStyle,
  onPress = () => {},
}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundColor = (): ColorValue => {
    const BUTTON_FILLED_BACKGROUND = isDarkMode
      ? dark.buttonFilledBackground
      : light.buttonFilledBackground;
    const BUTTON_OUTLINED_BACKGROUND = isDarkMode
      ? dark.buttonOutlinedBackground
      : light.buttonOutlinedBackground;
    const BUTTON_SIMPLIED_BACKGROUND = isDarkMode
      ? dark.buttonSimpliedBackground
      : light.buttonSimpliedBackground;
    switch (type) {
      case 'Filled':
        return BUTTON_FILLED_BACKGROUND;
      case 'Outlined':
        return BUTTON_OUTLINED_BACKGROUND;
      case 'Simplied':
        return BUTTON_SIMPLIED_BACKGROUND;
    }
  };

  const borderColor = (): ColorValue => {
    const BUTTON_FILLED_BORDER = isDarkMode
      ? dark.buttonFilledBorder
      : light.buttonFilledBorder;
    const BUTTON_OUTLINED_BORDER = isDarkMode
      ? dark.buttonOutlinedBorder
      : light.buttonOutlinedBorder;
    const BUTTON_SIMPLIED_BORDER = isDarkMode
      ? dark.buttonSimpliedBorder
      : light.buttonSimpliedBorder;
    switch (type) {
      case 'Filled':
        return BUTTON_FILLED_BORDER;
      case 'Outlined':
        return BUTTON_OUTLINED_BORDER;
      case 'Simplied':
        return BUTTON_SIMPLIED_BORDER;
    }
  };

  const titleColor = (): ColorValue => {
    const BUTTON_FILLED_TEXT = isDarkMode
      ? dark.buttonFilledText
      : light.buttonFilledText;
    const BUTTON_OUTLINED_TEXT = isDarkMode
      ? dark.buttonOutlinedText
      : light.buttonOutlinedText;
    const BUTTON_SIMPLIED_TEXT = isDarkMode
      ? dark.buttonSimpliedText
      : light.buttonSimpliedText;
    switch (type) {
      case 'Filled':
        return BUTTON_FILLED_TEXT;
      case 'Outlined':
        return BUTTON_OUTLINED_TEXT;
      case 'Simplied':
        return BUTTON_SIMPLIED_TEXT;
    }
  };

  const wrappableStyle = (): FlexAlignType | undefined => {
    switch (wrap) {
      case 'wrap':
        return 'baseline';
      case 'no-wrap':
        return 'stretch';
      case 'free':
      default:
        return undefined;
    }
  };

  const renderContainerStyle = (): StyleProp<ViewStyle> => {
    return {
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: backgroundColor(),
      borderRadius: TOKENS.radiuses.button,
      borderWidth: TOKENS.borders.button,
      borderColor: borderColor(),
      alignSelf: wrappableStyle(),
    };
  };

  const renderIcon = (): ReactNode => {
    if (isValidElement(icon)) {
      return icon;
    } else {
      const CoreIcon = icon as IIconProps;
      return <Icon {...CoreIcon} />;
    }
  };

  const renderTitle = () => {
    return (
      <Text style={[{color: titleColor()}, styles.title, titleStyle]}>
        {title}
      </Text>
    );
  };

  const renderOpacity = () => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[renderContainerStyle(), styles.container, containerStyle]}>
        {icon ? renderIcon() : null}
        {title ? renderTitle() : null}
      </TouchableOpacity>
    );
  };

  const renderChangeable = () => {
    return (
      <Pressable onPress={onPress} style={renderContainerStyle()}></Pressable>
    );
  };

  switch (clickType) {
    case 'Opacity':
    default:
      return renderOpacity();

    case 'Changeable':
      return renderChangeable();
  }
};

export default Button;

const styles = StyleSheet.create({
  container: {
    paddingVertical: TOKENS.paddings.componentContainerVertical,
    paddingHorizontal: TOKENS.paddings.componentContainerHorizontal,
  },
  title: {
    fontFamily: FONTS.semibold,
    fontSize: 16,
  },
});

//  TODO: Geliştirmeye devam edilecek

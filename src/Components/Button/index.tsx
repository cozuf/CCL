import React, {FC, isValidElement, ReactNode, useState} from 'react';
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
  titleStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
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
  const [pressed, setPressed] = useState<boolean>(false);

  const backgroundColor = (): ColorValue => {
    const BUTTON_FILLED_BACKGROUND = pressed
      ? isDarkMode
        ? dark.buttonFilledPressedBackgorund
        : light.buttonFilledPressedBackgorund
      : isDarkMode
      ? dark.buttonFilledBackground
      : light.buttonFilledBackground;

    const BUTTON_OUTLINED_BACKGROUND = pressed
      ? isDarkMode
        ? dark.buttonOutlinedPressedBackgorund
        : light.buttonOutlinedPressedBackgorund
      : isDarkMode
      ? dark.buttonOutlinedBackground
      : light.buttonOutlinedBackground;

    const BUTTON_SIMPLIED_BACKGROUND = pressed
      ? isDarkMode
        ? dark.buttonSimpliedPressedBackground
        : light.buttonSimpliedPressedBackground
      : isDarkMode
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
    const BUTTON_FILLED_BORDER = pressed
      ? isDarkMode
        ? dark.buttonFilledPressedBorder
        : light.buttonFilledPressedBorder
      : isDarkMode
      ? dark.buttonFilledBorder
      : light.buttonFilledBorder;

    const BUTTON_OUTLINED_BORDER = pressed
      ? isDarkMode
        ? dark.buttonOutlinedPressedBorder
        : light.buttonOutlinedPressedBorder
      : isDarkMode
      ? dark.buttonOutlinedBorder
      : light.buttonOutlinedBorder;

    const BUTTON_SIMPLIED_BORDER = pressed
      ? isDarkMode
        ? dark.buttonSimpliedPressedBorder
        : light.buttonSimpliedPressedBorder
      : isDarkMode
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
    const BUTTON_FILLED_TEXT = pressed
      ? isDarkMode
        ? dark.buttonFilledPressedText
        : light.buttonFilledPressedText
      : isDarkMode
      ? dark.buttonFilledText
      : light.buttonFilledText;

    const BUTTON_OUTLINED_TEXT = pressed
      ? isDarkMode
        ? dark.buttonOutlinedPressedText
        : light.buttonOutlinedPressedText
      : isDarkMode
      ? dark.buttonOutlinedText
      : light.buttonOutlinedText;

    const BUTTON_SIMPLIED_TEXT = pressed
      ? isDarkMode
        ? dark.buttonSimpliedPressedText
        : light.buttonSimpliedPressedText
      : isDarkMode
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
      return (
        <Icon
          {...CoreIcon}
          color={CoreIcon.color ? CoreIcon.color : titleColor()}
        />
      );
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
        activeOpacity={0.5}
        onPress={onPress}
        style={[renderContainerStyle(), styles.container, containerStyle]}>
        {icon && title !== 'Button' ? renderIcon() : null}
        {title ? renderTitle() : null}
      </TouchableOpacity>
    );
  };

  const renderChangeable = () => {
    return (
      <Pressable
        onPress={onPress}
        onPressIn={() => {
          setPressed(true);
        }}
        onPressOut={() => {
          setPressed(false);
        }}
        style={[renderContainerStyle(), styles.container, containerStyle]}>
        {icon && title !== 'Button' ? renderIcon() : null}
        {title ? renderTitle() : null}
      </Pressable>
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: TOKENS.paddings.componentContainerVertical,
    paddingHorizontal: TOKENS.paddings.componentContainerHorizontal,
  },
  title: {
    fontFamily: FONTS.semibold,
    fontSize: 16,
  },
});

//  TODO: Geliştirmeye devam edilecek

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
  Omit,
} from 'react-native';
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

const Button: FC<
  IButtonProps &
    (
      | Omit<TouchableOpacityProps, 'onPress' | 'style'>
      | Omit<PressableProps, 'onPress' | 'style'>
    )
> = ({
  clickType = 'Opacity',
  type = 'Filled',
  wrap = 'no-wrap',
  title = 'Button',
  icon,
  titleStyle,
  containerStyle,
  onPress = () => {},
  ...props
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [pressed, setPressed] = useState<boolean>(false);

  const backgroundColor = (): ColorValue => {
    const BUTTON_FILLED_BACKGROUND = isDarkMode
      ? dark.button[props.disabled ? 'passive' : 'active'][
          pressed ? 'pressed' : 'normal'
        ].filled.background
      : light.button[props.disabled ? 'passive' : 'active'][
          pressed ? 'pressed' : 'normal'
        ].filled.background;

    const BUTTON_OUTLINED_BACKGROUND = isDarkMode
      ? dark.button[props.disabled ? 'passive' : 'active'][
          pressed ? 'pressed' : 'normal'
        ].outlined.background
      : light.button[props.disabled ? 'passive' : 'active'][
          pressed ? 'pressed' : 'normal'
        ].outlined.background;

    const BUTTON_SIMPLIED_BACKGROUND = isDarkMode
      ? dark.button[props.disabled ? 'passive' : 'active'][
          pressed ? 'pressed' : 'normal'
        ].simplied.background
      : light.button[props.disabled ? 'passive' : 'active'][
          pressed ? 'pressed' : 'normal'
        ].simplied.background;

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
      ? dark.button[props.disabled ? 'passive' : 'active'][
          pressed ? 'pressed' : 'normal'
        ].filled.border
      : light.button[props.disabled ? 'passive' : 'active'][
          pressed ? 'pressed' : 'normal'
        ].filled.border;

    const BUTTON_OUTLINED_BORDER = isDarkMode
      ? dark.button[props.disabled ? 'passive' : 'active'][
          pressed ? 'pressed' : 'normal'
        ].outlined.border
      : light.button[props.disabled ? 'passive' : 'active'][
          pressed ? 'pressed' : 'normal'
        ].outlined.border;

    const BUTTON_SIMPLIED_BORDER = isDarkMode
      ? dark.button[props.disabled ? 'passive' : 'active'][
          pressed ? 'pressed' : 'normal'
        ].simplied.border
      : light.button[props.disabled ? 'passive' : 'active'][
          pressed ? 'pressed' : 'normal'
        ].simplied.border;
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
      ? dark.button[props.disabled ? 'passive' : 'active'][
          pressed ? 'pressed' : 'normal'
        ].filled.text
      : light.button[props.disabled ? 'passive' : 'active'][
          pressed ? 'pressed' : 'normal'
        ].filled.text;

    const BUTTON_OUTLINED_TEXT = isDarkMode
      ? dark.button[props.disabled ? 'passive' : 'active'][
          pressed ? 'pressed' : 'normal'
        ].outlined.text
      : light.button[props.disabled ? 'passive' : 'active'][
          pressed ? 'pressed' : 'normal'
        ].outlined.text;

    const BUTTON_SIMPLIED_TEXT = isDarkMode
      ? dark.button[props.disabled ? 'passive' : 'active'][
          pressed ? 'pressed' : 'normal'
        ].simplied.text
      : light.button[props.disabled ? 'passive' : 'active'][
          pressed ? 'pressed' : 'normal'
        ].simplied.text;
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
      // @ts-ignore
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        style={[renderContainerStyle(), styles.container, containerStyle]}
        {...props}>
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
        style={[renderContainerStyle(), styles.container, containerStyle]}
        {...props}>
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

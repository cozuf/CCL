import React, {FC, isValidElement, ReactNode, useRef, useState} from 'react';
import {
  StyleSheet,
  TextStyle,
  View,
  TextInput,
  TextInputProps,
  ViewStyle,
  ColorValue,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  useColorScheme,
  Platform,
  Pressable,
  Omit,
} from 'react-native';
import {Button, Icon, IIconProps, Text} from '..';
import {TOKENS} from '../../Theme';
import {dark, light} from '../../Theme/Variants';

export interface ITextInputProps {
  /**
   *
   */
  active?: boolean;

  /**
   *
   */
  type?: 'Email' | 'Password' | 'Normal';

  /**
   *
   */
  title?: string;

  /**
   *
   */
  titleStyle?: TextStyle;

  /**
   *
   */
  icon?: IIconProps | ReactNode;

  /**
   *
   */
  value: string;

  /**
   *
   */
  onChangeText: (text: string) => void;

  /**
   *
   */
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;

  /**
   *
   */
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;

  /**
   *
   */
  style?: TextStyle;

  /**
   *
   */
  warning?: string;

  /**
   *
   */
  warningStyle?: TextStyle;

  /**
   *
   */
  error?: string;

  /**
   *
   */
  errorStyle?: TextStyle;

  /**
   *
   */
  containerStyle?: ViewStyle;

  /**
   *
   */
  cleanable?: boolean;

  /**
   *
   */
  isRequired?: boolean;
}

export type ITextInputTypes = ITextInputProps &
  Omit<TextInputProps, 'onChangeText' | 'onFocus' | 'onBlur' | 'style'>;

const NTextInput: FC<ITextInputTypes> = ({
  active = true,
  type = 'Normal',
  title = 'Başlık',
  titleStyle,
  icon,
  value,
  style,
  onChangeText,
  warning,
  warningStyle,
  error,
  errorStyle,
  containerStyle,
  onFocus,
  onBlur,
  cleanable,
  isRequired,
  ...props
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const NativeTextInputRef = useRef<TextInput | null>(null);
  const [isFocused, setIsFocused] = useState<boolean>();

  const containerBackgroundColor = (): ColorValue => {
    const CONTAINER_BACKGROUND = isDarkMode
      ? dark.textInput[active ? (isFocused ? 'focused' : 'active') : 'passive']
          .background
      : light.textInput[active ? (isFocused ? 'focused' : 'active') : 'passive']
          .background;

    return CONTAINER_BACKGROUND;
  };

  const containerBorderColor = (): ColorValue => {
    const CONTAINER_BORDER_COLOR = isDarkMode
      ? dark.textInput[active ? (isFocused ? 'focused' : 'active') : 'passive']
          .border
      : light.textInput[active ? (isFocused ? 'focused' : 'active') : 'passive']
          .border;
    return CONTAINER_BORDER_COLOR;
  };

  const inputTextColor = (): ColorValue => {
    const INPUT_TEXT_COLOR = isDarkMode
      ? dark.textInput[active ? (isFocused ? 'focused' : 'active') : 'passive']
          .inputText
      : light.textInput[active ? (isFocused ? 'focused' : 'active') : 'passive']
          .inputText;
    return INPUT_TEXT_COLOR;
  };

  const titleTextColor = (): ColorValue => {
    const TITLE_TEXT_COLOR = isDarkMode
      ? dark.textInput[active ? (isFocused ? 'focused' : 'active') : 'passive']
          .titleText
      : light.textInput[active ? (isFocused ? 'focused' : 'active') : 'passive']
          .titleText;

    return TITLE_TEXT_COLOR;
  };

  const renderIcon = () => {
    if (isValidElement(icon)) {
      return icon;
    } else {
      const CoreIcon = icon as IIconProps;
      return (
        <Icon
          family={CoreIcon.family}
          name={CoreIcon.name}
          size={CoreIcon.size}
          color={CoreIcon.color || titleTextColor()}
        />
      );
    }
  };

  const renderWarning = () => {
    return <Text style={[warningStyle]}>{warning}</Text>;
  };

  const renderError = () => {
    return <Text style={[errorStyle]}>{error}</Text>;
  };

  const changeFocus = () => {
    if (NativeTextInputRef.current?.isFocused()) {
      NativeTextInputRef.current?.blur();
      setIsFocused(false);
    } else {
      NativeTextInputRef.current?.focus();
      setIsFocused(true);
    }
  };

  const renderClean = () => {
    return (
      <View>
        <Button
          wrap={'free'}
          childTye={'Icon'}
          type="Simplied"
          icon={{
            family: 'Ionicons',
            name: 'close',
            size: 20,
            color: inputTextColor(),
          }}
          onPress={() => {
            NativeTextInputRef.current?.clear();
            onChangeText('');
          }}
        />
      </View>
    );
  };

  return (
    <Pressable
      disabled={!active}
      style={[
        styles.container,
        containerStyle,
        {
          backgroundColor: containerBackgroundColor(),
          borderColor: containerBorderColor(),
        },
      ]}
      onPress={() => {
        changeFocus();
      }}>
      {title ? (
        <Text style={[titleStyle, {color: titleTextColor()}]}>
          {isRequired ? `* ${title}` : title}
        </Text>
      ) : null}
      <View style={[styles.inputContainer]}>
        {icon ? renderIcon() : null}
        {icon ? <View style={{width: 8}} /> : null}
        {
          <View style={{flex: 1}}>
            <TextInput
              ref={ref => {
                NativeTextInputRef.current = ref;
              }}
              editable={active}
              value={value}
              onChangeText={onChangeText}
              style={[
                styles.input,
                style,
                {
                  ...Platform.select({
                    ios: {
                      paddingVertical:
                        style && style.paddingVertical
                          ? Number(style?.paddingVertical) + 6.5
                          : 6.5,
                    },
                    android: {
                      paddingVertical:
                        style && style.paddingVertical
                          ? Number(style?.paddingVertical)
                          : 0,
                    },
                  }),
                },
                {color: inputTextColor()},
              ]}
              secureTextEntry={type === 'Password'}
              onFocus={(e: NativeSyntheticEvent<TextInputFocusEventData>) => {
                setIsFocused(true);
                if (typeof onFocus === 'function') {
                  onFocus(e);
                }
              }}
              onBlur={(e: NativeSyntheticEvent<TextInputFocusEventData>) => {
                setIsFocused(false);
                if (typeof onBlur === 'function') {
                  onBlur(e);
                }
              }}
              selectionColor={
                isDarkMode
                  ? dark.textInput.focused.selection
                  : light.textInput.focused.selection
              }
              {...props}
            />
          </View>
        }
        {cleanable && value.length > 0 && active ? renderClean() : null}
      </View>
      {warning ? renderWarning() : null}
      {error ? renderError() : null}
    </Pressable>
  );
};

export default NTextInput;

const styles = StyleSheet.create({
  container: {
    borderRadius: TOKENS.radiuses.component,
    borderWidth: TOKENS.borders.inputContainer,
    padding: TOKENS.paddings.componentContainerVertical,
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    paddingLeft: 0,
    paddingVertical: 12,
  },
  cleanContainer: {},
});

//  TODO: Loading den sonra geliştirlmeye devam edilecek devam edilecek

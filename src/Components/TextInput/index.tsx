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
} from 'react-native';
import {Button, Icon, IIconProps, Text} from '..';
import {TOKENS} from '../../Theme';
import {dark, light} from '../../Theme/Variants';

export interface ITextInputProps {
  type?: 'Email' | 'Password' | 'Normal';
  title?: string;
  titleStyle?: TextStyle;
  icon?: IIconProps | ReactNode;
  value: string;
  onChangeText: (text: string) => void;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  style?: TextStyle;
  warning?: string;
  warningStyle?: TextStyle;
  error?: string;
  errorStyle?: TextStyle;
  containerStyle?: ViewStyle;
  cleanable?: boolean;
  isRequired?: boolean;
}

const NTextInput: FC<
  ITextInputProps &
    Omit<TextInputProps, 'onChangeText' | 'onFocus' | 'onBlur' | 'style'>
> = ({
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
      ? dark.textInputBackground
      : light.textInputBackground;

    return CONTAINER_BACKGROUND;
  };

  const containerBorderColor = (): ColorValue => {
    const CONTAINER_BORDER_COLOR = isFocused
      ? isDarkMode
        ? dark.textInputFocused
        : light.textInputFocused
      : isDarkMode
      ? dark.textInputBorder
      : light.textInputBorder;
    return CONTAINER_BORDER_COLOR;
  };

  const inputTextColor = (): ColorValue => {
    const INPUT_TEXT_COLOR = isFocused
      ? isDarkMode
        ? dark.textInputTextFocused
        : light.textInputTextFocused
      : isDarkMode
      ? dark.textInputText
      : light.textInputText;
    return INPUT_TEXT_COLOR;
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
          color={CoreIcon.color}
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
      <View style={styles.cleanContainer}>
        <Button
          wrap={'wrap'}
          title={''}
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
      <Text style={[titleStyle, {color: inputTextColor()}]}>
        {isRequired ? `* ${title}` : title}
      </Text>
      <View style={[styles.inputContainer]}>
        {icon ? renderIcon() : null}
        {
          <View style={{flex: 1}}>
            <TextInput
              ref={ref => {
                NativeTextInputRef.current = ref;
              }}
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
                {color: isDarkMode ? dark.text : light.text},
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
              {...props}
            />
          </View>
        }
      </View>
      {cleanable && value.length > 0 ? renderClean() : null}
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
    width: '100%',
    flexDirection: 'row',
  },
  input: {
    paddingLeft: 0,
    paddingVertical: 12,
  },
  cleanContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    marginTop: TOKENS.paddings.componentContainerVertical,
    justifyContent: 'center',
  },
});

//  TODO: Buton ve loading den sonra geliştirlmeye devam edilecek devam edilecek

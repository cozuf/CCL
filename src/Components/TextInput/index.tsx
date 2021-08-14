import React, {
  FC,
  isValidElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  TextInput,
  TextInputProps,
  ViewStyle,
  ColorValue,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import {Icon, IIconProps, Text} from '..';
import {TOKENS} from '../../Theme';

export interface ITextInputProps {
  type?: 'Email' | 'Password' | 'Normal';
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  icon?: IIconProps | ReactNode;
  value: string;
  onChangeText: (text: string) => void;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  warning?: string;
  warningStyle?: StyleProp<TextStyle>;
  error?: string;
  errorStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  cleanable?: boolean;
  isRequired?: boolean;
}

const NTextInput: FC<ITextInputProps & TextInputProps> = ({
  type = 'Normal',
  title = 'Başlık',
  titleStyle,
  icon,
  value,
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
  const NativeTextInoutRef = useRef<TextInput | undefined>(null);
  const [containerBorderColor, setContainerBorderColor] = useState<ColorValue>(
    styles.container.backgroundColor,
  );
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
    if (NativeTextInoutRef.current?.isFocused()) {
      NativeTextInoutRef.current?.blur();
    } else {
      NativeTextInoutRef.current?.focus();
    }
  };

  const renderClean = () => {
    return (
      <View style={styles.cleanContainer}>
        <Icon family="Ionicons" name="close" size={20} />
      </View>
    );
  };

  return (
    <View
      style={[
        styles.container,
        containerStyle,
        {
          borderColor: containerBorderColor,
        },
      ]}
      onTouchStart={() => {
        changeFocus();
      }}>
      <Text style={[titleStyle]}>{isRequired ? `* ${title}` : title}</Text>
      <View style={[styles.inputContainer]}>
        {icon ? renderIcon() : null}
        {
          <View style={{flex: 1}}>
            <TextInput
              ref={NativeTextInoutRef}
              value={value}
              onChangeText={onChangeText}
              style={[styles.input]}
              secureTextEntry={type === 'Password'}
              onFocus={(e: NativeSyntheticEvent<TextInputFocusEventData>) => {
                setContainerBorderColor('#27190E');
                if (typeof onFocus === 'function') {
                  onFocus(e);
                }
              }}
              onBlur={(e: NativeSyntheticEvent<TextInputFocusEventData>) => {
                setContainerBorderColor(styles.container.backgroundColor);
                if (typeof onBlur === 'function') {
                  onBlur(e);
                }
              }}
              {...props}
            />
            {cleanable && value.length > 0 ? renderClean() : null}
          </View>
        }
      </View>
      {warning ? renderWarning() : null}
      {error ? renderError() : null}
    </View>
  );
};

export default NTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    borderRadius: TOKENS.radiuses.component,
    borderWidth: TOKENS.borders.inputContainer,
    padding: TOKENS.paddings.componentContainerVertical,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  input: {
    paddingVertical: 4,
    backgroundColor: 'orange',
  },
  cleanContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    justifyContent: 'center',
  },
});

//  TODO: Buton ve loading den sonra geliştirlmeye devam edilecek devam edilecek

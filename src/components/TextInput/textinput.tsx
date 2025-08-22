import React, { Fragment, forwardRef, useImperativeHandle, useRef } from "react";
import ITextInputProps, { ITextInputRef } from "./props";
import { Pressable, TextInput as RNTextInput, View } from "react-native";
import { useTheme } from "../../context";
import { ComponentPrefix } from "../Base/Prefix";
import { ComponentSuffix } from "../Base/Suffix";
import { ComponentError } from "../Base/Error";
import { ComponentTitle } from "../Base/Title";

const TextInput = forwardRef<ITextInputRef, ITextInputProps>((props, ref) => {
    const { title, disabled, fontFamily = "bold", prefixComponent, suffixComponent, error, containerStyle, style, ...rest } = props
    const { colors, tokens, fonts } = useTheme()
    const isError = !!error

    const NativeTextInputRef = useRef<RNTextInput | null>(null);

    useImperativeHandle(ref, () => {
        if (NativeTextInputRef.current) {
            return {
                focus: () => NativeTextInputRef.current?.focus() || {},
                blur: () => NativeTextInputRef.current?.blur() || {},
                clear: () => NativeTextInputRef.current?.clear() || {},
                isFocused: () => NativeTextInputRef.current?.isFocused() || false
            }
        } else {
            return {
                focus: () => { },
                blur: () => { },
                clear: () => { },
                isFocused: () => false
            }
        }
    });

    const onChangeFocus = () => {
        if (NativeTextInputRef.current?.isFocused()) {
            NativeTextInputRef.current?.blur();
        } else {
            NativeTextInputRef.current?.focus();
        }
    }

    const renderInput = () => {
        return (
            <RNTextInput
                ref={NativeTextInputRef}
                editable={!disabled}
                style={
                    [
                        {
                            fontFamily: fonts[fontFamily] || fontFamily,
                            color: colors.componentValue,
                            height: rest.multiline ? "auto" : 20,
                            margin: 0,
                            padding: 0,
                            paddingVertical: 0,
                            marginVertical: 0,
                            borderWidth: 0,
                            lineHeight: undefined,
                            includeFontPadding: false
                        }
                        ,
                        style
                    ]
                }
                {...rest}
            />
        )
    }

    return (
        <Fragment>
            <Pressable
                disabled={disabled}
                style={[
                    {
                        flexDirection: "row",
                        backgroundColor: colors.componentBackground,
                        borderWidth: tokens.borders.component,
                        borderColor: isError ? colors.error : colors.componentBorder,
                        borderRadius: tokens.radiuses.component,
                        paddingHorizontal: tokens.spaces.componentHorizontal,
                        paddingVertical: tokens.spaces.componentVertical,
                        opacity: disabled ? 0.5 : 1
                    },
                    containerStyle
                ]}
                onPress={onChangeFocus}>
                <ComponentPrefix error={error} prefixComponent={prefixComponent} />
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <ComponentTitle error={error} title={title} />
                    {renderInput()}
                </View>
                <ComponentSuffix error={error} suffixComponent={suffixComponent} />
            </Pressable>
            <ComponentError error={error} />
        </Fragment>
    )
})

export default TextInput
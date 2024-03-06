import React, { Fragment, forwardRef, useImperativeHandle, useRef } from "react";
import ITextInputProps, { ITextInputRef } from "./props";
import { Pressable, TextInput as RNTextInput, View } from "react-native";
import { Separator } from "../Separator";
import { Text } from "../Text";
import { useTheme } from "../../context";

const TextInput = forwardRef<ITextInputRef, ITextInputProps>((props, ref) => {
    const { title, disabled, fontFamily = "bold", prefixComponent, suffixComponent, error, containerStyle, ...rest } = props
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
    };

    const renderPrefix = () => {
        if (prefixComponent !== undefined) {
            return (
                <Fragment>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        {prefixComponent}
                    </View>
                    <Separator direction="horizontal" />
                </Fragment>
            )
        }
        return null
    }

    const renderSuffix = () => {
        if (suffixComponent !== undefined) {
            return (
                <Fragment>
                    <Separator direction="horizontal" />
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        {suffixComponent}
                    </View>
                </Fragment>
            )
        }
    }

    const renderTitle = () => {
        if (title) {
            return (
                <Fragment>
                    <Text fontFamily="medium" style={{ color: isError ? colors.error : colors.componentTitle }}>
                        {title}
                    </Text>
                    <Separator />
                </Fragment>
            )
        }
    }

    const renderInput = () => {
        return (
            <RNTextInput
                ref={NativeTextInputRef}
                value="value lara sdkfdas"
                style={{
                    fontFamily: fonts[fontFamily] || fontFamily,
                    color: colors.componentValue,
                    padding: 0,
                    paddingVertical: 0,
                    includeFontPadding: false
                }}
                {...rest}
            />
        )
    }

    const renderError = () => {
        if (isError) {
            return (
                <Fragment>
                    <Separator />
                    <View style={{ paddingHorizontal: tokens.spaces.componentHorizontal }}>
                        <Text fontFamily="medium" style={{ color: colors.error }}>
                            {error}
                        </Text>
                    </View>
                </Fragment>
            )
        }
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
                {renderPrefix()}
                <View style={{ flex: 1, justifyContent: "center" }}>
                    {renderTitle()}
                    {renderInput()}
                </View>
                {renderSuffix()}
            </Pressable>
            {renderError()}
        </Fragment>
    )
})

// const TextInput: FC<ITextInputProps> = ({ title, disabled, fontFamily = "bold", prefixComponent, suffixComponent, error, containerStyle, ...props }) => {
//     const { colors, tokens, fonts } = useTheme()
//     const isError = !!error

//     const renderPrefix = () => {
//         if (prefixComponent !== undefined) {
//             return (
//                 <Fragment>
//                     <View style={{ alignItems: "center", justifyContent: "center" }}>
//                         {prefixComponent}
//                     </View>
//                     <Separator direction="horizontal" />
//                 </Fragment>
//             )
//         }
//         return null
//     }

//     const renderSuffix = () => {
//         if (suffixComponent !== undefined) {
//             return (
//                 <Fragment>
//                     <Separator direction="horizontal" />
//                     <View style={{ alignItems: "center", justifyContent: "center" }}>
//                         {suffixComponent}
//                     </View>
//                 </Fragment>
//             )
//         }
//     }

//     const renderTitle = () => {
//         if (title) {
//             return (
//                 <Fragment>
//                     <Text fontFamily="medium" style={{ color: isError ? colors.error : colors.componentTitle }}>
//                         {title}
//                     </Text>
//                     <Separator />
//                 </Fragment>
//             )
//         }
//     }

//     const renderError = () => {
//         if (isError) {
//             return (
//                 <Fragment>
//                     <Separator />
//                     <View style={{ paddingHorizontal: tokens.spaces.componentHorizontal }}>
//                         <Text fontFamily="medium" style={{ color: colors.error }}>
//                             {error}
//                         </Text>
//                     </View>
//                 </Fragment>
//             )
//         }
//     }

//     return (
//         <Fragment>
//             <Pressable
//                 disabled
//                 style={[
//                     {
//                         flexDirection: "row",
//                         backgroundColor: colors.componentBackground,
//                         borderWidth: tokens.borders.component,
//                         borderColor: isError ? colors.error : colors.componentBorder,
//                         borderRadius: tokens.radiuses.component,
//                         paddingHorizontal: tokens.spaces.componentHorizontal,
//                         paddingVertical: tokens.spaces.componentVertical,
//                         opacity: disabled ? 0.5 : 1
//                     },
//                     containerStyle
//                 ]}>
//                 {renderPrefix()}
//                 <View style={{ flex: 1, justifyContent: "center" }}>
//                     {renderTitle()}
//                     <RNTextInput
//                         value="value lara sdkfdas"
//                         style={{
//                             fontFamily: fonts[fontFamily] || fontFamily,
//                             color: colors.componentValue,
//                             padding: 0,
//                             paddingVertical: 0,
//                             includeFontPadding: false
//                         }}
//                         {...props}
//                     />
//                 </View>
//                 {renderSuffix()}
//             </Pressable>
//             {renderError()}
//         </Fragment>
//     )
// }

export default TextInput
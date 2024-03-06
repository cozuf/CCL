import React, { ReactNode } from "react";
import { StyleProp, TextInputProps, ViewStyle } from "react-native";

export interface ITextInputRef {
    focus: () => void
    blur: () => void
    clear: () => void
    isFocused: () => boolean
}

interface ITextInputProps extends TextInputProps {
    /**
     * 
     */
    title?: string

    /**
     * 
     */
    fontFamily?: keyof CCL.FontScheme

    /**
     * 
     */
    disabled?: boolean

    /**
     * 
     */
    prefixComponent?: ReactNode

    /**
     * 
     */
    suffixComponent?: ReactNode

    /**
     * 
     */
    error?: string

    /**
     * 
     */
    containerStyle?: StyleProp<ViewStyle>
}

export default ITextInputProps
import { StyleProp, TextInputProps, ViewStyle } from "react-native";
import { IComponentErrorProps, IComponentPrefixProps, IComponentSuffixProps, IComponentTitleProps } from "../Base";

export interface ITextInputRef {
    focus: () => void
    blur: () => void
    clear: () => void
    isFocused: () => boolean
}

interface ITextInputProps extends TextInputProps, IComponentTitleProps, IComponentPrefixProps, IComponentSuffixProps, IComponentErrorProps {
    /**
     * @default "bold"
     */
    fontFamily?: keyof CCL.FontScheme

    /**
     * 
     */
    disabled?: boolean

    /**
     * 
     */
    containerStyle?: StyleProp<ViewStyle>
}

export default ITextInputProps
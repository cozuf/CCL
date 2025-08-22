
import { StyleProp, ViewStyle } from "react-native";
import { ITextProps } from "../Text";

interface IBadgeProps {
    /**
     * @default undefined
     */
    value?: number | string

    /**
     * @default 16
     */
    size?: number

    /**
     * 
     */
    containerStyle?: StyleProp<ViewStyle>

    /**
     * 
     */
    textStyle?: ITextProps["style"]
}

export default IBadgeProps
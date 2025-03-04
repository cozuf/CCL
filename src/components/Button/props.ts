import React from "react";
import { StyleProp, TouchableOpacityProps, ViewStyle } from "react-native";

interface IButtonProps extends Omit<TouchableOpacityProps, "style"> {
    /**
     * @default filled
     */
    type?: "filled" | "outlined" | "simplified"

    /**
     * 
     */
    title?: string

    /**
     * @default "no-wrap"
     */
    alignment?: "no-wrap" | "wrap" | "free"

    /**
     * 
     */
    containerStyle?: StyleProp<ViewStyle>
}

export default IButtonProps
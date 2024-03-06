import React from "react";
import { ColorValue, StyleProp, ViewStyle } from "react-native";
import { ITextProps } from "../Text";

interface IBadgeProps {
    /**
     * 
     */
    value?: number | string

    /**
     * 
     */
    size?: number

    /**
     * 
     */
    color?: keyof CCL.ColorScheme | ColorValue

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
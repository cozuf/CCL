import React from "react";
import { ColorValue, StyleProp, ViewStyle } from "react-native";

interface IDividerProps {
    /**
     * @default vertical
     */
    direction?: "vertical" | "horizontal"

    /**
     * @default 8
     * space between components
     */
    space?: ViewStyle["height"] | ViewStyle["width"]

    /**
     * @default 4
     * lentgh for divider
     */
    distance?: ViewStyle["height"] | ViewStyle["width"]

    /**
     * // FIXME
     * theme scheme "divider" key or any color value
     */
    color?: ColorValue

    /**
     * 
     */
    containerStyle?: StyleProp<ViewStyle>

    /**
     * 
     */
    style?: StyleProp<ViewStyle>


}

export default IDividerProps
import React from "react";
import { ColorValue, StyleProp, ViewStyle } from "react-native";

interface IDividerProps {
    /**
     * default vertical
     */
    direction?: "vertical" | "horizontal"

    /**
     * space between components
     */
    space?: ViewStyle["height"] | ViewStyle["width"]

    /**
     * lentgh for divider
     */
    distance?: ViewStyle["height"] | ViewStyle["width"]

    /**
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
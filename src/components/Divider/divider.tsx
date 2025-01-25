import React, { FC } from "react";
import IDividerProps from "./props";
import { View } from "react-native";

const Divider: FC<IDividerProps> = ({ direction = "vertical", space = 8, distance = 4, color, containerStyle, style }) => {

    return (
        <View style={[containerStyle, direction === "vertical" ? { paddingVertical: space } : { paddingHorizontal: space }]}>
            <View style={[style, direction === "vertical" ? { height: distance } : { flex: 1, width: distance }, { backgroundColor: color }]} />
        </View>
    )
}

export default Divider
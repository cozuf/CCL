import React, { FC } from "react";
import { View } from "react-native";
import IDividerProps from "./props";
import { useTheme } from "../../context";


const Divider: FC<IDividerProps> = ({ direction = "vertical", space = 8, distance = 4, color = "divider", containerStyle, style }) => {
    const { colors } = useTheme()
    
    return (
        <View style={[containerStyle, direction === "vertical" ? { paddingVertical: space } : { paddingHorizontal: space }]}>
            <View style={[style, direction === "vertical" ? { height: distance } : { flex: 1, width: distance }, { backgroundColor: colors[color] }]} />
        </View>
    )
}

export default Divider
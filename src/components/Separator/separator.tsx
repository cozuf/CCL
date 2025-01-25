import React, { FC } from "react";
import { View } from "react-native";
import ISeparatorProps from "./props";

const Separator: FC<ISeparatorProps> = ({ direction = "vertical", distance = 8 }) => {

    return (
        <View style={[direction === "vertical" ? { height: distance } : { width: distance }]} />
    )
}

export default Separator
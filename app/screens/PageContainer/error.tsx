import React, { FC } from "react";
import { View } from "react-native";
import { Text, useTheme } from "../../../src";

const PageContainerFallback: FC<any> = () => {
    const { colors } = useTheme()
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: colors.error }}>
                PAGE HATA VAR
            </Text>
        </View>
    )
}

export default PageContainerFallback
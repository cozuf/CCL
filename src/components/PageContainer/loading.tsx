import React, { FC } from "react"
import { useTheme } from "../../context"
import { ActivityIndicator, View } from "react-native"

const LoadingComponent: FC<any> = () => {
    const { colors } = useTheme()
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <ActivityIndicator size={"large"} color={colors.primary} />
        </View>
    )
}

export default LoadingComponent
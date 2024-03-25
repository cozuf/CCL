import React, { FC } from "react"
import { View } from "react-native"
import { Text } from "../Text"


const FallbackComponent: FC<any> = () => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>
                {"HATA"}
            </Text>
        </View>
    )
}

export default FallbackComponent
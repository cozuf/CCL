import React, { FC } from "react";
import { Platform, StyleProp, View, ViewStyle } from "react-native";
import IBadgeProps from "./props";
import { useTheme } from "../../context";
import { Text } from "../Text";

const Badge: FC<IBadgeProps> = ({ value, size = 16, containerStyle, textStyle }) => {
    const { colors } = useTheme()
    const VALUE = typeof value === "string" ? parseInt(value, 10) : value
    const VIEWING = VALUE ? VALUE > 9 ? "9+" : `${VALUE}` : undefined

    const container: StyleProp<ViewStyle> = {
        position: "absolute",
        zIndex: 99,
        top: value ? -size / 2 : -8,
        right: value ? -size / 2 : -8,
        borderWidth: 2,
        alignItems: 'center',
        ...Platform.select({
            ios: {
                justifyContent: 'center',
            },
        }),
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6,
    }

    const baseContainerStyle: StyleProp<ViewStyle> =
        value ?
            {
                height: Platform.OS === 'android' && Platform.Version < 28 ? size : size + 6,
                width: Platform.OS === 'android' && Platform.Version < 28 ? size : size + 6,
                borderRadius: size,
                borderColor: colors.pageBackground,
                backgroundColor: colors.primary,
                shadowColor: colors.shadow,
                alignItems: "center",
                justifyContent: "center"
            }
            :
            {
                height: 16,
                width: 16,
                borderRadius: 8,
                borderColor: colors.pageBackground,
                backgroundColor: colors.primary,
                shadowColor: colors.shadow,
            }

    return (
        <View
            style={[container, baseContainerStyle, containerStyle]}>
            <Text
                fontFamily={size < 20 ? "semibold" : "medium"}
                fontSize={size * 0.6}
                color="buttonText"
                style={textStyle}
            >
                {VIEWING}
            </Text>
        </View>
    )
}

export default Badge
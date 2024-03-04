import React, { FC, PropsWithChildren } from "react";
import { SafeAreaView, ScrollView, View } from "react-native"
import IPageContainerProps from "./props";
import { useTheme } from "../../context";

const PageContainer: FC<PropsWithChildren<IPageContainerProps>> = ({ type = "safeView", children, ...props }) => {
    const { colors } = useTheme()

    if (type === "safeArea") {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.pageBackground }} {...props}>
                {children}
            </SafeAreaView>
        )
    }
    if (type === "view") {
        return (
            <View style={{ flex: 1, backgroundColor: colors.pageBackground }} {...props}>
                {children}
            </View>
        )
    }
    if (type === "safeView") {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: colors.pageBackground }} {...props}>
                    {children}
                </View>
            </SafeAreaView>
        )
    }
    if (type === "scroll") {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: colors.pageBackground }} {...props}>
                {children}
            </ScrollView>
        )
    }
    if (type === "safeScroll") {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1, backgroundColor: colors.pageBackground }} {...props}>
                    {children}
                </ScrollView>
            </SafeAreaView>
        )
    }

    return null
}

export default PageContainer
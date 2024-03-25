import React, { FC, PropsWithChildren } from "react";
import { SafeAreaView, ScrollView, View } from "react-native"
import IPageContainerProps from "./props";
import { useTheme } from "../../context";
import { ErrorBoundary, FallbackComponent } from "../ErrorBoundary";
import LoadingComponent from "./loading";

const PageContainer: FC<PropsWithChildren<IPageContainerProps>> = ({ fallbackComponent, ...props }) => {

    return (
        <ErrorBoundary fallback={fallbackComponent || <FallbackComponent />}>
            <Child {...props} />
        </ErrorBoundary>
    )
}

export default PageContainer

const Child: FC<PropsWithChildren<Omit<IPageContainerProps, "fallbackComponent">>> = ({ type = "safeView", loading = false, loadingComponent, children, ...props }) => {
    const { colors } = useTheme()

    const kids = loading ? loadingComponent || <LoadingComponent /> : children

    if (type === "safeArea") {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.pageBackground }} {...props}>
                {kids}
            </SafeAreaView>
        )
    }
    if (type === "view") {
        return (
            <View style={{ flex: 1, backgroundColor: colors.pageBackground }} {...props}>
                {kids}
            </View>
        )
    }
    if (type === "safeView") {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: colors.pageBackground }} {...props}>
                    {kids}
                </View>
            </SafeAreaView>
        )
    }
    if (type === "scroll") {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: colors.pageBackground }} {...props}>
                {kids}
            </ScrollView>
        )
    }
    if (type === "safeScroll") {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1, backgroundColor: colors.pageBackground }} {...props}>
                    {kids}
                </ScrollView>
            </SafeAreaView>
        )
    }

    return null
}

import React, { FC, PropsWithChildren } from "react";
import { SafeAreaView, ScrollView, StyleProp, View, ViewStyle } from "react-native"
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

    const style: StyleProp<ViewStyle> = {
        flex: 1,
        backgroundColor: colors.pageBackground
    }

    if (type === "safeArea") {
        return (
            <SafeAreaView style={style} {...props}>
                {kids}
            </SafeAreaView>
        )
    }
    if (type === "view") {
        return (
            <View style={style} {...props}>
                {kids}
            </View>
        )
    }
    if (type === "safeView") {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={style} {...props}>
                    {kids}
                </View>
            </SafeAreaView>
        )
    }
    if (type === "scroll") {
        return (
            <ScrollView style={style} {...props}>
                {kids}
            </ScrollView>
        )
    }
    if (type === "safeScroll") {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={style} {...props}>
                    {kids}
                </ScrollView>
            </SafeAreaView>
        )
    }

    return null
}

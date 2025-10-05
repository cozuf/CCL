import React, { ErrorInfo, Fragment, useState } from "react";
import { View } from "react-native";
import { IPageContainerProps, PageContainer, Separator, TapSelector, Text, withErrorBoundary } from "../../../src";
import PageContainerFallback from "./error";

const PageContainerPage = () => {

    const [typeIndex, setTypeIndex] = useState<number>(0)
    const [loadingIndex, setLoadingIndex] = useState<number>(0)
    const [customLoadingIndex, setCustomLoadingIndex] = useState<number>(0)
    const [customFallbackIndex, setCustomFallbackIndex] = useState<number>(0)

    const CUSTOM_LOADING_COMPONENT = CUSTOM_LOADING[customLoadingIndex].value ?
        (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>
                    Loading . . .
                </Text>
            </View>
        )
        :
        undefined

    const CUSTOM_FALLBACK_COMPONENT = CUSTOM_FALLBACK[customFallbackIndex].value ?
        (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text color="error">
                    CUSTOM HATA VAR
                </Text>
            </View>
        )
        :
        undefined

    return (
        <Fragment>
            <View>
                <TapSelector
                    initialIndex={typeIndex}
                    data={TYPE}
                    onTap={(v, i) => { setTypeIndex(i) }}
                />
                <Separator />
                <TapSelector
                    initialIndex={loadingIndex}
                    data={LOADING}
                    onTap={(v, i) => { setLoadingIndex(i) }}
                />
                <Separator />
                <TapSelector
                    initialIndex={customLoadingIndex}
                    data={CUSTOM_LOADING}
                    onTap={(v, i) => { setCustomLoadingIndex(i) }}
                />
                <Separator />
                <TapSelector
                    initialIndex={customFallbackIndex}
                    data={CUSTOM_FALLBACK}
                    onTap={(v, i) => { setCustomFallbackIndex(i) }}
                />
            </View>
            <Separator />
            <PageContainer
                type={TYPE[typeIndex].value}
                loading={LOADING[loadingIndex].value}
                loadingComponent={CUSTOM_LOADING_COMPONENT}
                fallbackComponent={CUSTOM_FALLBACK_COMPONENT}
            >
            </PageContainer>
        </Fragment>
    )
}

export default withErrorBoundary(PageContainerPage, <PageContainerFallback />, (e: Error, i: ErrorInfo) => { console.log(PAGE_CONTAINER_PAGE_TAG, { e, i }) })

const PAGE_CONTAINER_PAGE_TAG = "PAGE_CONTAINER_PAGE"

const TYPE: Array<IData<NonNullable<IPageContainerProps["type"]>>> = [
    {
        title: "SafeView",
        value: "safeView"
    },
    {
        title: "SafeScroll",
        value: "safeScroll"
    },
    {
        title: "SafeArea",
        value: "safeArea"
    },
    {
        title: "View",
        value: "view"
    },
    {
        title: "Scroll",
        value: "scroll"
    }
]

const LOADING: Array<IData<NonNullable<IPageContainerProps["loading"]>>> = [
    {
        title: "Not Loading",
        value: false
    },
    {
        title: "Loading",
        value: true
    }
]

const CUSTOM_LOADING: Array<IData<NonNullable<IPageContainerProps["loading"]>>> = [
    {
        title: "Default",
        value: false
    },
    {
        title: "Custom",
        value: true
    }
]

const CUSTOM_FALLBACK: Array<IData<NonNullable<IPageContainerProps["loading"]>>> = [
    {
        title: "Default",
        value: false
    },
    {
        title: "Custom",
        value: true
    }
]
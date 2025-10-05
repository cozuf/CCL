import React, { useState } from "react";
import { View } from "react-native";
import { ITextProps, PageContainer, Separator, TapSelector, Text } from "../../../src/components";

const TextPage = () => {
    const [familyIndex, setFamilyIndex] = useState<number>(0)
    const [sizeIndex, setSizeIndex] = useState<number>(0)

    return (
        <PageContainer>
            <View style={{ height: 200, alignItems: "center", justifyContent: "center" }}>
                <Text
                    fontFamily={FONT_FAMILY[familyIndex].value}
                    fontSize={FONT_SIZE[sizeIndex].value}>
                    Some Text
                </Text>
            </View>
            <Separator />
            <View>
                <TapSelector
                    initialIndex={familyIndex}
                    data={FONT_FAMILY}
                    onTap={(v, i) => { setFamilyIndex(i) }}
                />
                <Separator />
                <TapSelector
                    initialIndex={sizeIndex}
                    data={FONT_SIZE}
                    onTap={(v, i) => { setSizeIndex(i) }}
                />
            </View>
        </PageContainer>
    )
}

export default TextPage

const FONT_FAMILY: Array<IData<NonNullable<ITextProps["fontFamily"]>>> = [
    {
        title: "light",
        value: "light"
    },
    {
        title: "regular",
        value: "regular"
    },
    {
        title: "medium",
        value: "medium"
    },
    {
        title: "semibold",
        value: "semibold"
    },
    {
        title: "bold",
        value: "bold"
    }
]

const FONT_SIZE = [
    {
        title: "8",
        value: 8
    },
    {
        title: "14",
        value: 14
    },
    {
        title: "20",
        value: 20
    },
    {
        title: "32",
        value: 32
    },
    {
        title: "40",
        value: 40
    }
]
import React, { useState } from "react";
import { View } from "react-native";
import { Button, IButtonProps, PageContainer, Separator, TapSelector, Text } from "../../../src";

const ButtonPage = () => {

    const [typeIndex, setTypeIndex] = useState<number>(0)
    const [alignmentIndex, setAlignmentIndex] = useState<number>(0)
    const [contentIndex, setContentIndex] = useState<number>(0)
    const [activeIndex, setActiveIndex] = useState<number>(0)

    const isCustom = CONTENT[contentIndex].value === "custom"

    const onPressButton = () => { console.warn("pressed") }

    return (
        <PageContainer>
            <View style={{ height: 200, justifyContent: "center" }}>
                {
                    isCustom ?
                        <Button
                            type={TYPE[typeIndex].value}
                            title="Button"
                            alignment={ALIGNMENT[alignmentIndex].value}
                            disabled={DISABLED[activeIndex].value}
                            onPress={onPressButton}
                        >
                            <Text>
                                Yusuf
                            </Text>
                        </Button>
                        :
                        <Button
                            type={TYPE[typeIndex].value}
                            title="Button"
                            alignment={ALIGNMENT[alignmentIndex].value}
                            disabled={DISABLED[activeIndex].value}
                            onPress={onPressButton}
                        />
                }
            </View>
            <Separator />
            <View>
                <TapSelector
                    initialIndex={typeIndex}
                    data={TYPE}
                    onTap={(v, i) => { setTypeIndex(i) }}
                />
                <Separator />
                <TapSelector
                    initialIndex={alignmentIndex}
                    data={ALIGNMENT}
                    onTap={(v, i) => { setAlignmentIndex(i) }}
                />
                <Separator />
                <TapSelector
                    initialIndex={contentIndex}
                    data={CONTENT}
                    onTap={(v, i) => { setContentIndex(i) }}
                />
                <Separator />
                <TapSelector
                    initialIndex={activeIndex}
                    data={DISABLED}
                    onTap={(v, i) => { setActiveIndex(i) }}
                />
            </View>
        </PageContainer>
    )
}

export default ButtonPage

const TYPE: Array<IData<NonNullable<IButtonProps["type"]>>> = [
    {
        title: "Filled",
        value: "filled"
    },
    {
        title: "Outlined",
        value: "outlined"
    },
    {
        title: "Simplified",
        value: "simplified"
    }
]

const ALIGNMENT: Array<IData<NonNullable<IButtonProps["alignment"]>>> = [
    {
        title: "No-wrap",
        value: "no-wrap"
    },
    {
        title: "Wrap",
        value: "wrap"
    },
    {
        title: "Free",
        value: "free"
    }
]

const CONTENT = [
    {
        title: "Title",
        value: "title"
    },
    {
        title: "Custom",
        value: "custom"
    }
]

const DISABLED = [
    {
        title: "Active",
        value: false
    },
    {
        title: "Disabled",
        value: true
    }
]
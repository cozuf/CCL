import React, { useState } from "react";
import { CheckBox, ChevronUpIcon, PageContainer, Separator, TapSelector, Text } from "../../../src";
import { Image, View } from "react-native";

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
const SELECTED = [
    {
        title: "Selected",
        value: true
    },
    {
        title: "Not Selected",
        value: false
    }
]
const CUSTOM_ICON = [
    {
        title: "Default Icon",
        value: false
    },
    {
        title: "Custom Icon",
        value: true
    }
]
const CUSTOM_CONTENT = [
    {
        title: "Default Content",
        value: false
    },
    {
        title: "Custom Content",
        value: true
    }
]

const CheckBoxPage = () => {

    const [activeIndex, setActiveIndex] = useState<number>(0)
    const [selectedIndex, setSelectedIndex] = useState<number>(0)
    const [customIconIndex, setCustomIconIndex] = useState<number>(0)
    const [customContentIndex, setCustomContentIndex] = useState<number>(0)

    const onPressComponent = (v: any, s: boolean) => {
        console.error({ v, s })
    }

    const renderPrefixComponent = CUSTOM_ICON[customIconIndex].value ?
        (s: boolean, a: boolean) => {

            if (s) {
                return (
                    <ChevronUpIcon color={"green"} />
                )
            }
            return (
                <ChevronUpIcon color={"red"} />
            )
        }
        :
        undefined

    const renderContentComponent = CUSTOM_CONTENT[customContentIndex].value ?
        <View>
            <Text fontFamily="bold" fontSize={18}>
                Title
            </Text>
            <Text fontFamily="medium" fontSize={10}>
                SubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitle
            </Text>
        </View>
        :
        undefined

    return (
        <PageContainer>
            <View style={{ height: 200, justifyContent: "center" }}>
                <CheckBox
                    disabled={DISABLED[activeIndex].value}
                    selected={SELECTED[selectedIndex].value}
                    value={"1"}
                    onSelect={onPressComponent}
                    prefixComponent={renderPrefixComponent}
                    contentComponent={renderContentComponent}
                />
            </View>
            <View>
                <TapSelector
                    initialIndex={activeIndex}
                    data={DISABLED}
                    onTap={(v, i) => { setActiveIndex(i) }}
                />
                <Separator />
                <TapSelector
                    initialIndex={selectedIndex}
                    data={SELECTED}
                    onTap={(v, i) => { setSelectedIndex(i) }}
                />
                <Separator />
                <TapSelector
                    initialIndex={customIconIndex}
                    data={CUSTOM_ICON}
                    onTap={(v, i) => { setCustomIconIndex(i) }}
                />
                <Separator />
                <TapSelector
                    initialIndex={customContentIndex}
                    data={CUSTOM_CONTENT}
                    onTap={(v, i) => { setCustomContentIndex(i) }}
                />
            </View>
        </PageContainer>
    )
}

export default CheckBoxPage
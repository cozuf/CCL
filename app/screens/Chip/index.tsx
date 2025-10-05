import React, { useState } from "react";
import { View } from "react-native";
import { ChevronUpIcon, Chip, CloseIcon, PageContainer, Separator, TapSelector, Text } from "../../../src";

const ChipPage = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const [selectedIndex, setSelectedIndex] = useState<number>(0)
    const [prefixIndex, setPrefixIndex] = useState<number>(0)
    const [contentIndex, setContentIndex] = useState<number>(0)
    const [suffixIndex, setSuffixIndex] = useState<number>(0)

    const onSelectChip = (value: any, selected: boolean) => {
        console.error({ value, selected })
        setSelectedIndex(old => old === 0 ? 1 : 0)
    }

    const renderPrefix = WITH_PREFIX[prefixIndex].value ? (s: boolean, d: boolean) => {
        if (s) {
            return (
                <ChevronUpIcon color={"error"} />
            )
        }
        return (
            <ChevronUpIcon color={"success"} />
        )
    } : undefined

    const renderContent = CUSTOM_CONTENT[contentIndex].value ? (
        <View>
            <Text fontFamily="bold" fontSize={18}>
                Title
            </Text>
            <Text fontFamily="medium" fontSize={10}>
                Subtitle
            </Text>
        </View>
    ) : undefined

    const renderSuffix = WITH_SUFFIX[suffixIndex].value ? (s: boolean, d: boolean) => {
        if (s) {
            return (
                <CloseIcon height={24} width={24} color={"error"} />
            )
        }
        return (
            <CloseIcon height={24} width={24} color={"success"} />
        )
    } : undefined

    return (
        <PageContainer>
            <View style={{ height: 200, justifyContent: "center" }}>
                <Chip
                    value={"1"}
                    selected={SELECTED[selectedIndex].value}
                    disabled={DISABLED[activeIndex].value}
                    prefixComponent={renderPrefix}
                    contentComponent={renderContent}
                    suffixComponent={renderSuffix}
                    onSelect={onSelectChip}
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
                    initialIndex={prefixIndex}
                    data={WITH_PREFIX}
                    onTap={(v, i) => { setPrefixIndex(i) }}
                />
                <Separator />
                <TapSelector
                    initialIndex={contentIndex}
                    data={CUSTOM_CONTENT}
                    onTap={(v, i) => { setContentIndex(i) }}
                />
                <Separator />
                <TapSelector
                    initialIndex={suffixIndex}
                    data={WITH_SUFFIX}
                    onTap={(v, i) => { setSuffixIndex(i) }}
                />
            </View>
        </PageContainer>
    )
}

export default ChipPage

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

const WITH_PREFIX = [
    {
        title: "Without Prefix",
        value: false
    },
    {
        title: "With Prefix",
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

const WITH_SUFFIX = [
    {
        title: "Without Suffix",
        value: false
    },
    {
        title: "With Suffix",
        value: true
    }
]
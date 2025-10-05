import React, { useState } from "react";
import { View } from "react-native";
import { PageContainer, Separator, TapSelector, TextInput } from "../../../src";

const TextInputPage = () => {
    const [value, setvalue] = useState<string>("")

    const [disabledIndex, setDisabledIndex] = useState<number>(0)
    const [withTitleIndex, setWithTitleIndex] = useState<number>(1)
    const [withPrefixIndex, setWithPrefixIndex] = useState<number>(0)
    const [withSuffixIndex, setWithSuffixIndex] = useState<number>(0)
    const [withErrorIndex, setWithErrorIndex] = useState<number>(0)

    return (
        <PageContainer>
            <View style={{ height: 200, }}>
                <Separator distance={40} />
                <TextInput
                    disabled={DISABLED[disabledIndex].value}
                    prefixComponent={WITH_PREFIX[withPrefixIndex].value ? () => <View style={{ height: 40, width: 40, backgroundColor: "orange" }} /> : undefined}
                    suffixComponent={WITH_SUFFIX[withSuffixIndex].value ? () => <View style={{ height: 40, width: 40, backgroundColor: "yellow" }} /> : undefined}
                    title={WITH_TITLE[withTitleIndex].value}
                    value={value}
                    onChangeText={setvalue}
                    error={WITH_ERROR[withErrorIndex].value}
                    placeholder="Placeholder"
                />
            </View>
            <View>
                <TapSelector
                    initialIndex={disabledIndex}
                    data={DISABLED}
                    onTap={(v, i) => setDisabledIndex(i)}
                />
                <Separator />
                <TapSelector
                    initialIndex={withTitleIndex}
                    data={WITH_TITLE}
                    onTap={(v, i) => setWithTitleIndex(i)}
                />
                <Separator />
                <TapSelector
                    initialIndex={withPrefixIndex}
                    data={WITH_PREFIX}
                    onTap={(v, i) => setWithPrefixIndex(i)}
                />
                <Separator />
                <TapSelector
                    initialIndex={withSuffixIndex}
                    data={WITH_SUFFIX}
                    onTap={(v, i) => setWithSuffixIndex(i)}
                />
                <Separator />
                <TapSelector
                    initialIndex={withErrorIndex}
                    data={WITH_ERROR}
                    onTap={(v, i) => setWithErrorIndex(i)}
                />
            </View>
        </PageContainer>
    )
}

export default TextInputPage

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

const WITH_TITLE = [
    {
        title: "Without Title",
        value: undefined
    },
    {
        title: "With Title",
        value: "Title"
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

const WITH_ERROR = [
    {
        title: "Without Error",
        value: undefined
    },
    {
        title: "With Error",
        value: "Some Error"
    }
]
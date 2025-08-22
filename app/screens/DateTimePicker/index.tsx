import React, { useState } from "react";
import { DateTimePicker, IDateTimePickerProps, PageContainer, Separator, TapSelector } from "../../../src";
import { View } from "react-native";
import { DatePickerProps } from "react-native-date-picker";

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
const MODE: Array<IData<IDateTimePickerProps["mode"]>> = [
    {
        title: "Datetime",
        value: "datetime"
    },
    {
        title: "Date",
        value: "date"
    },
    {
        title: "Time",
        value: "time"
    }
]
const DISPLAY_TYPE: Array<IData<IDateTimePickerProps["displayType"]>> = [
    {
        title: "BottomSheet",
        value: "bottomSheet"
    },
    {
        title: "Modal",
        value: "modal"
    }
]

const DateTimePickerPage = () => {

    const [date, setDate] = useState<Date>()

    const [modeIndex, setModeIndex] = useState<number>(0)
    const [disabledIndex, setDisabledIndex] = useState<number>(0)
    const [withTitleIndex, setWithTitleIndex] = useState<number>(1)
    const [withPrefixIndex, setWithPrefixIndex] = useState<number>(0)
    const [withSuffixIndex, setWithSuffixIndex] = useState<number>(0)
    const [withErrorIndex, setWithErrorIndex] = useState<number>(0)
    const [displayTypeIndex, setDisplayTypeIndex] = useState<number>(0)


    return (
        <PageContainer>
            <View>
                <Separator distance={40} />
                <DateTimePicker
                    date={date}
                    onSubmit={setDate}
                    mode={MODE[modeIndex].value}
                    displayType={DISPLAY_TYPE[displayTypeIndex].value}
                    disabled={DISABLED[disabledIndex].value}
                    prefixComponent={WITH_PREFIX[withPrefixIndex].value ? () => <View style={{ height: 40, width: 40, backgroundColor: "orange" }} /> : undefined}
                    suffixComponent={WITH_SUFFIX[withSuffixIndex].value ? () => <View style={{ height: 40, width: 40, backgroundColor: "yellow" }} /> : undefined}
                    title={WITH_TITLE[withTitleIndex].value}
                    error={WITH_ERROR[withErrorIndex].value}
                />
            </View>
            <Separator distance={40} />
            <View>
                <TapSelector
                    initialIndex={modeIndex}
                    data={MODE}
                    onTap={(v, i) => setModeIndex(i)}
                />
                <Separator />
                <TapSelector
                    initialIndex={displayTypeIndex}
                    data={DISPLAY_TYPE}
                    onTap={(v, i) => setDisplayTypeIndex(i)}
                />
                <Separator />
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

export default DateTimePickerPage
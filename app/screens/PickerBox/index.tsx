import React, { useState } from "react";
import { View } from "react-native";
import { IPickerBoxProps, PageContainer, PickerBox, Separator, TapSelector } from "../../../src";

const SelectBoxPage = () => {
    const [regions, setRegions] = useState<Array<IListData<Product>>>(DATA)

    const [displayTypeIndex, setDisplayTypeIndex] = useState<number>(0)
    const [disabledIndex, setDisabledIndex] = useState<number>(0)
    const [withTitleIndex, setWithTitleIndex] = useState<number>(1)
    const [withPlaceholderIndex, setWithPlaceholderIndex] = useState<number>(1)
    const [withPrefixIndex, setWithPrefixIndex] = useState<number>(0)
    const [withSuffixIndex, setWithSuffixIndex] = useState<number>(0)
    const [withErrorIndex, setWithErrorIndex] = useState<number>(0)

    const onSubmitSelection = (selectedItem: IListData<Product>) => {
        // console.log({ selectedItem })
        setRegions((old) => old.map((v) => ({ ...v, selected: v.value === selectedItem.value })))
    }

    return (
        <PageContainer>
            <View style={{ height: 200, justifyContent: "center" }}>
                <PickerBox
                    displayType={DISPLAY_TYPE[displayTypeIndex].value}
                    data={regions}
                    onSubmit={onSubmitSelection}
                    disabled={DISABLED[disabledIndex].value}
                    prefixComponent={WITH_PREFIX[withPrefixIndex].value ? () => <View style={{ height: 40, width: 40, backgroundColor: "orange" }} /> : undefined}
                    suffixComponent={WITH_SUFFIX[withSuffixIndex].value ? () => <View style={{ height: 40, width: 40, backgroundColor: "yellow" }} /> : undefined}
                    title={WITH_TITLE[withTitleIndex].value}
                    placeholder={WITH_PLACEHOLDER[withPlaceholderIndex].value}
                    error={WITH_ERROR[withErrorIndex].value}
                />
            </View>
            <View>
                <TapSelector
                    initialIndex={displayTypeIndex}
                    data={DISPLAY_TYPE}
                    onTap={(v, i) => { setDisplayTypeIndex(i) }}
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
                    initialIndex={withPlaceholderIndex}
                    data={WITH_PLACEHOLDER}
                    onTap={(v, i) => setWithPlaceholderIndex(i)}
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

export default SelectBoxPage

interface Product {
    id: number
    name: string
}

const DATA: Array<IListData<Product>> = [
    {
        title: "Akdeniz",
        value: {
            id: 1,
            name: "Akdeniz Bölgesi"
        },
        selected: false,
        selectable: true
    },
    {
        title: 'Doğu Anadolu',
        value: {
            id: 2,
            name: "Doğu Anadolu Bölgesi"
        },
        selected: false,
        selectable: true
    },
    {
        title: 'Ege',
        value: {
            id: 3,
            name: "Ege Bölgesi"
        },
        selected: false,
        selectable: true
    },
    {
        title: 'Güney Doğu Anadolu',
        value: {
            id: 4,
            name: "Güney Doğu Anadolu Bölgesi"
        },
        selected: false,
        selectable: true
    },
    {
        title: 'İç Anadolu',
        value: {
            id: 5,
            name: "İç Anadolu Bölgesi"
        },
        selected: false,
        selectable: true
    },
    {
        title: 'Karadeniz',
        value: {
            id: 6,
            name: "Karadeniz Bölgesi"
        },
        selected: false,
        selectable: true
    },
    {
        title: 'Marmara',
        value: {
            id: 7,
            name: "Marmara Bölgesi"
        },
        selected: false,
        selectable: true
    },
    {
        title: 'Atina',
        value: {
            id: 8,
            name: "Atina Bölgesi"
        },
        selected: false,
        selectable: true
    },
    {
        title: 'Ayasofya',
        value: {
            id: 9,
            name: "Ayasofya Bölgesi"
        },
        selected: false,
        selectable: true
    },
    {
        title: 'Mezapotamya',
        value: {
            id: 10,
            name: "Mezapotamya Bölgesi"
        },
        selected: false,
        selectable: true
    },
    {
        title: 'Mısır',
        value: {
            id: 11,
            name: "Mısır Bölgesi"
        },
        selected: false,
        selectable: true
    },
    {
        title: 'Balkan',
        value: {
            id: 12,
            name: "Balkan Bölgesi"
        },
        selected: false,
        selectable: true
    },
    {
        title: 'Belgrad',
        value: {
            id: 13,
            name: "Belgrad Bölgesi"
        },
        selected: false,
        selectable: true
    },
    {
        title: 'Eflak',
        value: {
            id: 14,
            name: "Eflak Bölgesi"
        },
        selected: false,
        selectable: true
    },
    {
        title: 'Boğdan',
        value: {
            id: 15,
            name: "Boğdan Bölgesi"
        },
        selected: false,
        selectable: true
    },
    {
        title: 'Arnavutluk',
        value: {
            id: 16,
            name: "Arnavutluk Bölgesi"
        },
        selected: false,
        selectable: true
    },
    {
        title: 'Kafkaslar',
        value: {
            id: 17,
            name: "Kafkasya Bölgesi"
        },
        selected: false,
        selectable: true
    },
    {
        title: 'Cezayir',
        value: {
            id: 18,
            name: "Cezayir Bölgesi"
        },
        selected: false,
        selectable: true
    },
    {
        title: 'Fas',
        value: {
            id: 19,
            name: "Fas Bölgesi"
        },
        selected: false,
        selectable: true
    }
]

const DISPLAY_TYPE: Array<IData<NonNullable<IPickerBoxProps<any>["displayType"]>>> = [
    {
        title: "BottomSheet",
        value: "bottomSheet"
    },
    {
        title: "Modal",
        value: "modal"
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

const WITH_PLACEHOLDER = [
    {
        title: "Without Placeholder",
        value: undefined
    },
    {
        title: "With Placeholder",
        value: "Placeholder"
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
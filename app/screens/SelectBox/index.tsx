import React, { useState } from "react";
import { PageContainer, SelectBox, Separator, TapSelector } from "../../../src";
import { View } from "react-native";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";

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
    }
]

const SELECTION_TYPE = [
    {
        title: "Single Select",
        value: "singleSelect"
    },
    {
        title: "Multi Select",
        value: "multiSelect"
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

const SelectBoxPage = () => {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    const [regions, setRegions] = useState<Array<IListData<Product>>>(DATA)

    const [selectionTypeIndex, setSelectionTypeIndex] = useState<number>(0)
    const [disabledIndex, setDisabledIndex] = useState<number>(0)
    const [withTitleIndex, setWithTitleIndex] = useState<number>(0)
    const [withPlaceholderIndex, setWithPlaceholderIndex] = useState<number>(0)
    const [withPrefixIndex, setWithPrefixIndex] = useState<number>(0)
    const [withSuffixIndex, setWithSuffixIndex] = useState<number>(0)
    const [withErrorIndex, setWithErrorIndex] = useState<number>(0)

    const onSubmitSelection = (selectedList: Array<IListData<Product>>, list: Array<IListData<Product>>) => {
        // console.log({ selectedList })
        // console.log({ list })
        setRegions(list)
    }

    return (
        <PageContainer>
            <View style={{ height: 200, justifyContent: "center" }}>
                <SelectBox
                    navigation={navigation}
                    selectionType={SELECTION_TYPE[selectionTypeIndex].value as any}
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
                    initialIndex={selectionTypeIndex}
                    data={SELECTION_TYPE}
                    onTap={(v, i) => { setSelectionTypeIndex(i) }}
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
import React, { useState } from "react";
import { CheckBoxGroup, PageContainer, Separator, TapSelector, Text } from "../../../src";
import { ListRenderItem, View } from "react-native";

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

const CUSTOM_ITEM = [
    {
        title: "Default Item",
        value: false
    },
    {
        title: "Custom Item",
        value: true
    }
]

const CheckBoxGroupPage = () => {
    const [customItemIndex, setCustomItemIndex] = useState<number>(0)

    const [regions, setRegions] = useState<Array<IListData<Product>>>(DATA)

    const onSelectItem = (selectedValue: Product, selected: boolean, newList: Array<IListData<Product>>) => {
        // console.log({ selectedValue, selected, newList })
        setRegions(newList)
    }

    const renderItem: ListRenderItem<IListData<Product>> | undefined = CUSTOM_ITEM[customItemIndex].value ? ({ item }) => {
        return (
            <View
                style={{
                    // width: 200,
                    flexDirection: "row",
                    marginHorizontal: 8,
                    padding: 8,
                    borderRadius: 16,
                    backgroundColor: "white"
                }}>
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                }}>
                    <Text>
                        {item.title}
                    </Text>
                </View>
                <View style={{
                    height: 32,
                    width: 32,
                    borderRadius: 8,
                    backgroundColor: item.selected ? "red" : "blue"
                }}
                />
            </View>
        )
    } : undefined

    return (
        <PageContainer>
            <View>
                <TapSelector
                    initialIndex={customItemIndex}
                    data={CUSTOM_ITEM}
                    onTap={(v, i) => { setCustomItemIndex(i) }}
                />
                <Separator />
            </View>
            <View>
                <CheckBoxGroup
                    data={regions}
                    onSelect={onSelectItem}
                    renderItem={renderItem}
                    // numColumns={2}
                />
            </View>
        </PageContainer>
    )
}

export default CheckBoxGroupPage
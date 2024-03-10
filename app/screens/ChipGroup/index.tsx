import React, { useState } from "react";
import { ChipGroup, PageContainer, Separator, Text } from "../../../src";
import { View } from "react-native";

const TYPE_DATA: Array<IListData<string>> = [
    {
        selectable: true,
        selected: true,
        value: "full_time",
        title: "Tam Zamanlı"
    },
    {
        selectable: true,
        selected: false,
        value: "part_time",
        title: "Yarı Zamanlı"
    },
    {
        selectable: true,
        selected: false,
        value: "seasonal",
        title: "Dönemsel"
    }
]
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

const ChipGroupPage = () => {
    const [list, setList] = useState<Array<IListData<Product>>>(DATA)

    const onSelectItem = (selectedValue: Product, selected: boolean, newList: Array<IListData<Product>>) => {
        // console.log({ selectedValue, selected, newList })
        setList(newList)
    }

    const renderSelectedItemList = (v: IListData<Product>, i: number, a: Array<IListData<Product>>) => {
        return (
            <View>
                <Text>
                    {v.value.id} - {v.value.name}
                </Text>
            </View>
        )
    }

    return (
        <PageContainer>
            <View>
                {
                    list.filter((v) => v.selected).map(renderSelectedItemList)
                }
            </View>
            <Separator distance={40} />
            <View style={{}}>
                <ChipGroup
                    data={DATA}
                    onSelect={onSelectItem}
                    containerStyle={{ justifyContent: "center" }}
                />
            </View>
        </PageContainer>
    )
}

export default ChipGroupPage
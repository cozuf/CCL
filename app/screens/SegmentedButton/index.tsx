import React, { useEffect, useState } from "react";
import { PageContainer, SegmentedButton, Separator, TapSelector } from "../../../src";
import { View } from "react-native";

interface Product {
    id: string
    name: string
}

const THREE_ITEM_DATA: Array<IListData<Product>> = [
    {
        selectable: true,
        selected: false,
        title: "First",
        value: {
            id: "1",
            name: "Birinci"
        }
    },
    {
        selectable: true,
        selected: false,
        title: "Second",
        value: {
            id: "2",
            name: "İkinci"
        }
    },
    {
        selectable: true,
        selected: false,
        title: "Third",
        value: {
            id: "3",
            name: "Üçüncü"
        }
    },
    // {
    //     selectable: true,
    //     selected: false,
    //     title: "Fourth",
    //     value: {
    //         id: "4",
    //         name: "Dördüncü"
    //     }
    // },
    // {
    //     selectable: true,
    //     selected: false,
    //     title: "Fifth",
    //     value: {
    //         id: "5",
    //         name: "Beşinci"
    //     }
    // },
    // {
    //     selectable: true,
    //     selected: false,
    //     title: "Sixth",
    //     value: {
    //         id: "6",
    //         name: "Altıncı"
    //     }
    // }
]

const FOUR_ITEM_DATA: Array<IListData<Product>> = [
    {
        selectable: true,
        selected: false,
        title: "First",
        value: {
            id: "1",
            name: "Birinci"
        }
    },
    {
        selectable: true,
        selected: false,
        title: "Second",
        value: {
            id: "2",
            name: "İkinci"
        }
    },
    {
        selectable: true,
        selected: false,
        title: "Third",
        value: {
            id: "3",
            name: "Üçüncü"
        }
    },
    {
        selectable: true,
        selected: false,
        title: "Fourth",
        value: {
            id: "4",
            name: "Dördüncü"
        }
    },
]

const FIVE_ITEM_DATA: Array<IListData<Product>> = [
    {
        selectable: true,
        selected: false,
        title: "First",
        value: {
            id: "1",
            name: "Birinci"
        }
    },
    {
        selectable: true,
        selected: false,
        title: "Second",
        value: {
            id: "2",
            name: "İkinci"
        }
    },
    {
        selectable: true,
        selected: false,
        title: "Third",
        value: {
            id: "3",
            name: "Üçüncü"
        }
    },
    {
        selectable: true,
        selected: false,
        title: "Fourth",
        value: {
            id: "4",
            name: "Dördüncü"
        }
    },
    {
        selectable: true,
        selected: false,
        title: "Fifth",
        value: {
            id: "5",
            name: "Beşinci"
        }
    }
]

const DATA = [
    {
        title: "Three İtems",
        value: THREE_ITEM_DATA
    },
    {
        title: "Four İtems",
        value: FOUR_ITEM_DATA
    },
    {
        title: "Five İtems",
        value: FIVE_ITEM_DATA
    }
]

const SegmentedButtonPage = () => {
    const [activeDataIndex, setActiveDataIndex] = useState<number>(0)

    const [data, setData] = useState(DATA[activeDataIndex].value)

    useEffect(() => {
        setData(DATA[activeDataIndex].value)
    }, [activeDataIndex])

    const onPressSegmentedButton = (value: Product) => {
        console.warn({ value })
        setData((old) => old.map((v, i) => ({ ...v, selected: v.value.id === value.id })))
    }

    return (
        <PageContainer>
            <View style={{ height: 200, justifyContent: "center", paddingHorizontal: 16 }}>
                <SegmentedButton
                    data={data}
                    initialIndex={0}
                    onSelect={onPressSegmentedButton}
                />
            </View>
            <View>
                <TapSelector
                    initialIndex={activeDataIndex}
                    data={DATA}
                    onTap={(v, i) => { setActiveDataIndex(i) }}
                />
                <Separator />
            </View>
        </PageContainer>
    )
}

export default SegmentedButtonPage
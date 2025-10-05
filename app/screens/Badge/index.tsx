import React, { useState } from "react";
import { View } from "react-native";
import { Badge, Button, PageContainer, Separator, TapSelector } from "../../../src";

const BadgePage = () => {
    const [valueIndex, setValueIndex] = useState<number>(0)
    const [sizeIndex, setSızeIndex] = useState<number>(0)

    return (
        <PageContainer>
            <View style={{ height: 200, alignItems: "center", justifyContent: "center" }}>
                <View>
                    <Badge
                        value={VALUE[valueIndex].value}
                        size={SIZE[sizeIndex].value}
                    />
                    <Button title="Yusuf" />
                </View>
            </View>
            <Separator />
            <View>
                <TapSelector
                    initialIndex={valueIndex}
                    data={VALUE}
                    onTap={(v, i) => { setValueIndex(i) }}
                />
                <Separator />
                <TapSelector
                    initialIndex={sizeIndex}
                    data={SIZE}
                    onTap={(v, i) => { setSızeIndex(i) }}
                />
            </View>
        </PageContainer>
    )
}

export default BadgePage

const VALUE = [
    {
        title: "0",
        value: undefined
    },
    {
        title: "5",
        value: 5
    },
    {
        title: "9",
        value: 9
    },
    {
        title: "15",
        value: 15
    }
]

const SIZE = [
    {
        title: "16",
        value: 16
    },
    {
        title: "20",
        value: 20
    },
    {
        title: "24",
        value: 24
    },
    {
        title: "32",
        value: 32
    },
    {
        title: "40",
        value: 40
    }
]
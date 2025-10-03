import React, { useState } from "react";
import { View } from "react-native";
import { Divider, PageContainer, Separator, TapSelector } from "../../../src";

const DIRECTION = [
    {
        title: "vertical",
        value: "vertical"
    },
    {
        title: "horizontal",
        value: "horizontal"
    }
]
const SPACE = [
    {
        title: "default 8",
        value: undefined
    },
    {
        title: "16",
        value: 16
    },
    {
        title: "24",
        value: 24
    }
]
const DISTANCE = [
    {
        title: "default 4",
        value: undefined
    },
    {
        title: "8",
        value: 8
    },
    {
        title: "16",
        value: 16
    }
]
const COLOR: Array<IData<keyof CCL.ColorScheme>> = [
    {
        title: "Green",
        value: "success"
    },
    {
        title: "blue",
        value: "primary"
    },
    {
        title: "Red",
        value: "error"
    }
]

const DividerPage = () => {

    const [directionIndex, setDirectionIndex] = useState<number>(0)
    const [spaceIndex, setSpaceIndex] = useState<number>(0)
    const [distanceIndex, setDistanceIndex] = useState<number>(0)
    const [colorIndex, setColorIndex] = useState<number>(0)

    const isVertical = DIRECTION[directionIndex].value === "vertical"

    return (
        <PageContainer>
            <View style={{ height: 200, flexDirection: isVertical ? "column" : "row" }}>
                <View style={[isVertical ? { height: 40, } : { width: 40 }, { backgroundColor: "red" }]} />
                <Divider
                    direction={isVertical ? "vertical" : "horizontal"}
                    space={SPACE[spaceIndex].value}
                    distance={DISTANCE[distanceIndex].value}
                    color={COLOR[colorIndex].value}
                />
                <View style={[isVertical ? { height: 40, } : { width: 40 }, { backgroundColor: "blue" }]} />
            </View>
            <Separator distance={50} />
            <View style={{ flex: 1 }}>
                <TapSelector
                    initialIndex={directionIndex}
                    data={DIRECTION}
                    onTap={(v, i) => { setDirectionIndex(i) }}
                />
                <Separator />
                <TapSelector
                    initialIndex={spaceIndex}
                    data={SPACE}
                    onTap={(v, i) => { setSpaceIndex(i) }}
                />
                <Separator />
                <TapSelector
                    initialIndex={distanceIndex}
                    data={DISTANCE}
                    onTap={(v, i) => { setDistanceIndex(i) }}
                />
                <Separator />
                <TapSelector
                    initialIndex={colorIndex}
                    data={COLOR}
                    onTap={(v, i) => { setColorIndex(i) }}
                />
            </View>
        </PageContainer>
    )
}

export default DividerPage
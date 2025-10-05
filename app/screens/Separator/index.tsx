import React, { useState } from "react";
import { View } from "react-native";
import { PageContainer, Separator, TapSelector } from "../../../src";

const SeparatorPage = () => {
    const [directionIndex, setDirectionIndex] = useState<number>(0)
    const [distanceIndex, setDistanceIndex] = useState<number>(0)

    const isVertical = DIRECTION[directionIndex].value === "vertical"

    return (
        <PageContainer>
            <View style={{ height: 200, flexDirection: isVertical ? "column" : "row" }}>
                <View style={[isVertical ? { height: 40, } : { width: 40 }, { backgroundColor: "red" }]} />

                <Separator
                    direction={isVertical ? "vertical" : "horizontal"}
                    distance={DISTANCE[distanceIndex].value}
                />
                <View style={[isVertical ? { height: 40, } : { width: 40 }, { backgroundColor: "blue" }]} />
            </View>
            <Separator distance={80} />
            <View>
                <TapSelector
                    initialIndex={directionIndex}
                    data={DIRECTION}
                    onTap={(v, i) => { setDirectionIndex(i) }}
                />
                <Separator />
                <TapSelector
                    initialIndex={distanceIndex}
                    data={DISTANCE}
                    onTap={(v, i) => { setDistanceIndex(i) }}
                />
            </View>
        </PageContainer>
    )
}

export default SeparatorPage

const DIRECTION = [
    {
        title: "Vertical",
        value: "vertical"
    },
    {
        title: "Horizontal",
        value: "horizontal"
    }
]

const DISTANCE = [
    {
        title: "4",
        value: 4
    },
    {
        title: "default 8",
        value: undefined
    },
    {
        title: "16",
        value: 16
    },
    {
        title: "32",
        value: 32
    }
]
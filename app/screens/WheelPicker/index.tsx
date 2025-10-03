import React, { useState } from "react";
import { View } from "react-native";
import { PageContainer, Separator, Text, WheelPicker } from "../../../src";

const DATA = new Array<IData<any>>(30).fill({ title: "", value: "" }).map((v, i) => ({ title: `${i + 1}`, value: `${i + 1}`, selected: false, selectable: true }));

const WheelPickerPage = () => {
    const [textA, setTextA] = useState<string | number>("")
    const [textB, setTextB] = useState<string | number>("")
    const [textC, setTextC] = useState<string | number>("")

    return (
        <PageContainer>
            <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                    <WheelPicker data={DATA} onChangeItem={(a) => { setTextA(a.title) }} />
                    <Separator />
                    <Text>
                        {textA}
                    </Text>
                </View>
                <View style={{ flex: 1 }}>
                    <WheelPicker data={DATA} onChangeItem={(b) => { setTextB(b.title) }} />
                    <Separator />
                    <Text>
                        {textB}
                    </Text>
                </View>
            </View>

            <WheelPicker data={DATA} onChangeItem={(c) => { setTextC(c.title) }} />
            <Separator />
            <Text>
                {textC}
            </Text>
        </PageContainer>
    )
}

export default WheelPickerPage
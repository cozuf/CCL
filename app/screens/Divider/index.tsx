import React from "react";
import { PageContainer } from "../../../src";
import { View } from "react-native";
import { Divider, Separator } from "../../../src";

const DividerPage = () => {
    return (
        <PageContainer>
            <View>
                <View style={{ height: 40, backgroundColor: "red" }} />
                <Divider color={"green"} />
                <View style={{ height: 40, backgroundColor: "blue" }} />
            </View>
            <Separator distance={160} />
            <View style={{ height: 120 }}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ width: 40, backgroundColor: "red" }} />
                    <Divider direction="horizontal" color={"green"} />
                    <View style={{ width: 40, backgroundColor: "blue" }} />
                </View>
            </View>
        </PageContainer>
    )
}

export default DividerPage
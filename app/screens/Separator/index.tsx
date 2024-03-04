import React from "react";
import { View } from "react-native";
import { PageContainer, Separator } from "../../../src";

const SeparatorPage = () => {
    return (
        <PageContainer>
            <View style={{ height: 40, backgroundColor: "red" }} />
            <Separator distance={80} />
            <View style={{ height: 40, backgroundColor: "blue" }} />
        </PageContainer>
    )
}

export default SeparatorPage
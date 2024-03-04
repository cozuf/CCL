import React from "react";
import { PageContainer, Separator, Text } from "../../../src/components";

const TextPage = () => {
    return (
        <PageContainer style={{ alignItems: "center" }}>
            <Separator distance={16} />
            <Text fontFamily="light" fontSize={20} >Light</Text>
            <Text fontFamily="regular" fontSize={20}>Regular</Text>
            <Text fontFamily="medium" fontSize={20}>Medium</Text>
            <Text fontFamily="semibold" fontSize={20}>Semibold</Text>
            <Text fontFamily="bold" fontSize={20}>Bold</Text>
            <Text fontSize={40}>Random Text</Text>
        </PageContainer>
    )
}

export default TextPage
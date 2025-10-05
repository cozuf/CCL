import React from "react";
import { PageContainer, TapSelector } from "../../../src";

const TapSelectorPage = () => {

    const onTap = (selectedItem: IData<number>, selectedIndex: number) => {
        console.warn({ selectedItem, selectedIndex })
    }

    return (
        <PageContainer>
            <TapSelector data={DATA} onTap={onTap} />
        </PageContainer>
    )
}

export default TapSelectorPage

const DATA: Array<IData<number>> = [
    {
        title: "Sade",
        value: 0
    },
    {
        title: "Orta",
        value: 1
    },
    {
        title: "Şekerli",
        value: 2
    }
]
import React, { useState } from "react";
import { Card, PageContainer, Separator, TapSelector, Text } from "../../../src";
import { View } from "react-native";

const DISABLED = [
    {
        title: "Active",
        value: false
    },
    {
        title: "Disabled",
        value: true
    }
]
const EXPANDABLE = [
    {
        title: "Expandable",
        value: true
    },
    {
        title: "Not Expandable",
        value: false
    }
]
const EXPANDED = [
    {
        title: "Expanded",
        value: true
    },
    {
        title: "Not Expanded",
        value: false
    }
]

const CardPage = () => {
    const [disabledIndex, setDisabledIndex] = useState<number>(0)
    const [expandableIndex, setExpandableIndex] = useState<number>(0)
    const [expandedIndex, setExpandedIndex] = useState<number>(0)

    const renderHeaderComponent = () => {
        return (
            <Text>
                Header
            </Text>
        )
    }
    const renderFooterComponent = () => {
        return (
            <Text>
                Footer
            </Text>
        )
    }

    return (
        <PageContainer>
            <View style={{ height: 200, paddingTop: 20 }}>
                <Card
                    disabled={DISABLED[disabledIndex].value}
                    expandable={EXPANDABLE[expandableIndex].value}
                    isExpanded={EXPANDED[expandedIndex].value}
                    headerComponent={renderHeaderComponent()}
                    footerComponent={renderFooterComponent()}>
                    <Text>
                        Body 1
                    </Text>
                    <Text>
                        Body 2
                    </Text>
                </Card>
            </View>
            <View>
                <TapSelector
                    initialIndex={disabledIndex}
                    data={DISABLED}
                    onTap={(v, i) => setDisabledIndex(i)}
                />
                <Separator />
                <TapSelector
                    initialIndex={expandableIndex}
                    data={EXPANDABLE}
                    onTap={(v, i) => setExpandableIndex(i)}
                />
                <Separator />
                <TapSelector
                    initialIndex={expandedIndex}
                    data={EXPANDED}
                    onTap={(v, i) => setExpandedIndex(i)}
                />
                <Separator />
            </View>
        </PageContainer>
    )
}

export default CardPage
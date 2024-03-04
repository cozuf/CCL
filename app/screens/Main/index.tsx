import React from "react"
import { Button, FlatList, View } from "react-native"
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native"
import COMPONENT_LIST from "../../../src/components/list"
import { PageContainer, Text } from "../../../src/components"

const Main = () => {
    const navigation = useNavigation<NavigationProp<ParamListBase>>()

    const items = COMPONENT_LIST.map((v) => ({
        label: v,
        path: v.toUpperCase()
    }))

    return (
        <PageContainer>
            <Button onPress={() => { }} title="Yusuf" />
            <FlatList
                data={items}
                renderItem={({ item, index }) => {
                    return (
                        <Text onPress={() => navigation.navigate(item.path)}>
                            {item.label} - {item.path}
                        </Text>
                    )
                }}
            />
        </PageContainer>
    )
}

export default Main
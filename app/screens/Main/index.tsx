import React from "react"
import { FlatList } from "react-native"
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native"
import COMPONENT_LIST from "../../../src/components/list"
import { Button, PageContainer, Separator } from "../../../src"

const Main = () => {
    const navigation = useNavigation<NavigationProp<ParamListBase>>()

    const items = COMPONENT_LIST.map((v) => ({
        label: v,
        path: v.toUpperCase()
    }))

    const onPressComponent = (path: string) => {
        navigation.navigate(path)
    }

    return (
        <PageContainer>
            <FlatList
                bounces={false}
                data={items}
                renderItem={({ item, index }) => {
                    return (
                        <Button
                            title={` ${item.label} - ${item.path}`}
                            onPress={() => onPressComponent(item.path)}
                        />
                    )
                }}
                ItemSeparatorComponent={() => <Separator />}
            />
        </PageContainer>
    )
}

export default Main
import React from "react"
import { FlatList } from "react-native"
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native"
import COMPONENT_LIST from "../../../src/components/list"
import { Button, PageContainer, Separator } from "../../../src"

const Main = () => {
    const navigation = useNavigation<NavigationProp<ParamListBase>>()

    const items = COMPONENT_LIST.map((v) => ({
        label: v,
        isInput: v.includes("input"),
        path: v.replace(" - input", "").toUpperCase()
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
                            type={item.isInput ? "outlined" : "filled"}
                            title={` ${item.label}`}
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
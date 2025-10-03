import React from "react"
import { FlatList, View } from "react-native"
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native"
import COMPONENT_LIST from "../../../src/components/list"
import { Button, PageContainer, Separator, darkColors, useSetTheme, useTheme } from "../../../src"
import { light } from "../../../src/theme"

const Main = () => {
    const { name } = useTheme()
    const setTheme = useSetTheme()
    const navigation = useNavigation<NavigationProp<ParamListBase>>()

    const items = COMPONENT_LIST.map((v) => ({
        label: v,
        isInput: v.includes("input"),
        path: v.replace(" - input", "").toUpperCase()
    }))

    const onPressComponent = (path: string) => {
        navigation.navigate(path)
    }

    const renderHeader = () => {
        return (
            <View style={{ paddingVertical: 16 }}>
                <Button
                    type="simplified"
                    title={`Tema - ${name} - Değiştir`}
                    onPress={() => {

                        setTheme({ name: name === "light" ? "dark" : "light", colors: name === "light" ? darkColors : light })
                    }}
                />
            </View>
        )
    }

    return (
        <PageContainer>
            <FlatList
                keyExtractor={(_, i) => `${i}`}
                bounces={false}
                data={items}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={renderHeader}
                renderItem={({ item, index }) => {
                    return (
                        <Button
                            key={`${index}`}
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
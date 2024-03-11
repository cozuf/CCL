import React, { ReactNode, useLayoutEffect, useState } from "react";
import { Button, CheckBoxGroup, ISelectBoxProps, PageContainer, RadioButtonGroup } from "../../components";
import { NavigationProp, ParamListBase, RouteProp, useNavigation, useRoute } from "@react-navigation/native";

type ParamsList = {
    base: {
        data: ISelectBoxProps<any>["data"]
        selectionType: ISelectBoxProps<any>["selectionType"]
        onSubmit: (selectedList: ISelectBoxProps<any>["data"], data: ISelectBoxProps<any>["data"]) => void
        title?: string | ReactNode
        description?: string
    };
};

const SelectBoxPage = () => {
    const navigation = useNavigation<NavigationProp<ParamListBase>>()
    const { params } = useRoute<RouteProp<ParamsList, 'base'>>();
    const { title = " ", description, selectionType, data, onSubmit = () => { } } = params || {}

    const [list, setList] = useState(data)

    useLayoutEffect(() => {
        navigation.setOptions({
            title
        })
    }, [])

    const onPressSubmit = () => {
        const selectedList = list.filter((v) => v.selected)
        onSubmit(selectedList, list)
        navigation.goBack()
    }

    const renderContent = () => {
        if (selectionType === "singleSelect") {
            return (
                <RadioButtonGroup
                    bounces={false}
                    data={list}
                    onSelect={(s, l) => { setList(l) }}
                />
            )
        }

        if (selectionType === "multiSelect") {
            return (
                <CheckBoxGroup
                    bounces={false}
                    data={list}
                    onSelect={(s, i, l) => { setList(l) }}
                />
            )
        }
    }

    return (
        <PageContainer>
            {renderContent()}
            <Button
                // FIXME Buton ismi ya yapının translate'si ile ya da porps'dan "onSubmitTitle" vererek düzeltilebilir 
                title="Tamam"
                onPress={onPressSubmit}
                disabled={!list.some((v) => v.selected)}
            />
        </PageContainer>
    )
}

export default SelectBoxPage
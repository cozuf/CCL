import React, { ReactNode, useLayoutEffect } from "react";
import { ISelectBoxProps, PageContainer } from "../../components";
import { NavigationProp, ParamListBase, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import Content from "../../components/SelectBox/content";

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

    useLayoutEffect(() => {
        navigation.setOptions({
            title
        })
    }, [])

    return (
        <PageContainer>
            <Content
                data={data}
                selectionType={selectionType}
                onSubmit={onSubmit}
            />
        </PageContainer>
    )
}

export default SelectBoxPage
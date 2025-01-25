import { NavigationProp, ParamListBase } from "@react-navigation/native";
import React, { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

// TODO display type eklenebilir modal, bottomSheet, page gibi

interface ISelectBoxProps<ItemT> {
    /**
     * @default singleSelect
     */
    selectionType: "singleSelect" | "multiSelect"

    /**
     * @default bottomSheet
     */
    displayType?: "bottomSheet" | "navigate"

    /**
     * @requires Array of { title, value, selected, selectable }
     */
    data: Array<IListData<ItemT>>

    /**
     * 
     */
    onSubmit: (selectedList: Array<IListData<ItemT>>, list: Array<IListData<ItemT>>) => void

    /**
     * 
     */
    navigation: NavigationProp<ParamListBase>

    /**
     * 
     */
    title?: string

    /**
     * 
     */
    placeholder?: string

    /**
     * 
     */
    disabled?: boolean

    /**
     * 
     */
    prefixComponent?: () => ReactNode

    /**
     * 
     */
    suffixComponent?: () => ReactNode

    /**
     * 
     */
    error?: string

    /**
     * 
     */
    containerStyle?: StyleProp<ViewStyle>
}

export default ISelectBoxProps
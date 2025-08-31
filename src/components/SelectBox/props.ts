import { StyleProp, ViewStyle } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { IComponentPlaceholderProps, IComponentPrefixProps, IComponentSuffixProps, IComponentTitleProps, IComponentValueProps } from "../Base";

interface ISelectBoxProps<ItemT> extends IComponentTitleProps, IComponentValueProps, IComponentPrefixProps, IComponentSuffixProps, IComponentPlaceholderProps {
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
    navigation?: NavigationProp<ParamListBase>

    /**
     * 
     */
    disabled?: boolean

    /**
     * 
     */
    containerStyle?: StyleProp<ViewStyle>
}

export default ISelectBoxProps
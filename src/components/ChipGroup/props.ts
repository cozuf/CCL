import { ReactElement } from "react";
import { StyleProp, ViewStyle } from "react-native";

interface IChipGroupProps<ItemT> {
    /**
     * 
     */
    data: Array<IListData<ItemT>>

    /**
     * 
     */
    onSelect: (selectedValaue: ItemT, selected: boolean, newList: Array<IListData<ItemT>>) => void

    /**
     * 
     */
    renderItem?: (value: IListData<ItemT>, index: number, array: Array<IListData<any>>) => ReactElement | null

    /**
     * 
     */
    containerStyle?: StyleProp<ViewStyle>
}

export default IChipGroupProps
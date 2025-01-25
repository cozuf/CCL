import React from "react";
import { FlatListProps, ListRenderItem } from "react-native";

interface IRadioButtonGroupProps<ItemT> extends Omit<FlatListProps<ItemT>, "data" | "renderItem"> {
    /**
     * 
     */
    data: Array<IListData<ItemT>>

    /**
     * 
     */
    onSelect: (selectedValaue: ItemT, newList: Array<IListData<ItemT>>) => void

    /**
     * 
     */
    renderItem?: ListRenderItem<ItemT> | null | undefined;
}

export default IRadioButtonGroupProps
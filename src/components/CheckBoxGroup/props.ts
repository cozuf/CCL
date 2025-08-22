import { FlatListProps, ListRenderItem } from "react-native";

interface ICheckBoxGroupProps<ItemT> extends Omit<FlatListProps<ItemT>, "data" | "renderItem"> {
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
    renderItem?: ListRenderItem<ItemT> | null | undefined;
}

export default ICheckBoxGroupProps
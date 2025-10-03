import { FlatListProps } from "react-native";

interface IWheelPickerProps<ItemT> extends Omit<FlatListProps<ItemT>, "data" | "renderItem"> {

    /**
     * 
     */
    initialIndex?: number

    /**
     * 
     */
    data: Array<IListData<ItemT>>

    /**
     * 
     * @param item 
     * @returns 
     */
    onChangeItem: (item: IListData<ItemT>) => void
}

export default IWheelPickerProps
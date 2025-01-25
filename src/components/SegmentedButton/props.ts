import React from "react";

interface ISegmentedButtonProps<ItemT> {

    /**
     * array of belows
     *  title: string | number
     *  value: T
     *  selectable: boolean
     *  selected: boolean
     * 
     * @requires Array
     */
    data: Array<IListData<ItemT>>

    /**
     * @default 0
     */
    initialIndex?: number

    /**
     * 
     */
    onSelect?: (value: ItemT) => void
}

export default ISegmentedButtonProps
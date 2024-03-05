import React from "react";

interface ITapSelectorProps<ItemT> {
    /**
     * default 0
     */
    initialIndex?: number

    /**
     * 
     */
    data: ReadonlyArray<IData<ItemT>>

    /**
     * 
     */
    onTap: (selectedItem: ItemT, selectedIndex: number) => void;
}

export default ITapSelectorProps
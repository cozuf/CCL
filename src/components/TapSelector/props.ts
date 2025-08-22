interface ITapSelectorProps<ItemT> {
    /**
     * @default 0
     */
    initialIndex?: number

    /**
     * @requires ReadonlyArray
     */
    data: ReadonlyArray<IData<ItemT>>

    /**
     * @callback
     */
    onTap: (selectedItem: ItemT, selectedIndex: number) => void;
}

export default ITapSelectorProps
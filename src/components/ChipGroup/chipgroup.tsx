import React, { FC, Fragment, useState } from "react";
import IChipGroupProps from "./props";
import { ScrollView } from "react-native";
import Chip from "../Chip/chip";
import { Separator } from "../Separator";

const ChipGroup: FC<IChipGroupProps<any>> = ({ data, onSelect, renderItem, containerStyle }) => {
    const [list, setList] = useState<IChipGroupProps<any>["data"]>(data)

    const onSelectItem = (value: any, selected: boolean) => {
        const newList = list.map((v, i) => ({ ...v, selected: v.value === value ? selected : v.selected }))
        onSelect(value, selected, newList)
        setList(newList)
    }

    const renderGroupItem = (item: IListData<any>, index: number, array: Array<IListData<any>>) => {
        if (typeof renderItem === "function") {
            return renderItem(item, index, array)
        }
        const { title, value, selected, selectable } = item
        return (
            <Fragment key={`${index}`}>
                <Chip
                    selected={selected}
                    disabled={!selectable}
                    value={value}
                    title={`${title}`}
                    onSelect={onSelectItem}
                    containerStyle={{ margin: 2, }}
                />
                <Separator direction="horizontal" />
            </Fragment>
        )
    }
    console.log("render")
    return (
        <ScrollView
            bounces={false}
            contentContainerStyle={
                [
                    {
                        padding: 2,
                        flexDirection: "row",
                        flexWrap: 'wrap',
                    }
                    ,
                    containerStyle
                ]
            }>
            {
                list.map(renderGroupItem)
            }
        </ScrollView>
    )
}

export default ChipGroup
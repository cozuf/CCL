import React, { FC, useState } from "react";
import ICheckBoxGroupProps from "./props";
import { FlatList, ListRenderItem, TouchableOpacity } from "react-native";
import { CheckBox } from "../CheckBox";
import { Separator } from "../Separator";

const CheckBoxGroup: FC<ICheckBoxGroupProps<any>> = ({ data, onSelect = () => { }, renderItem, ...props }) => {
    const [list, setList] = useState<ICheckBoxGroupProps<any>["data"]>(data)

    const onPressItem = (pressedValue: any, isSelected: boolean) => {
        const newList = list.map((v, i) => ({ ...v, selected: v.value === pressedValue ? isSelected : v.selected }))
        onSelect(pressedValue, isSelected, newList)
        setList(newList)
    }

    const renderListItem: ListRenderItem<IListData<any>> = (info) => {
        if (typeof renderItem === "function") {
            const { item, index } = info
            const { value, selected } = item
            return (
                <TouchableOpacity
                    key={`${index}`}
                    activeOpacity={0.5}
                    disabled={!item.selectable}
                    style={{ opacity: item.selectable ? 1 : 0.5 }}
                    onPress={() => { onPressItem(value, !selected) }}
                >
                    {renderItem(info)}
                </TouchableOpacity>
            )
        }
        return renderDefaultListItem(info)
    }

    const renderDefaultListItem: ListRenderItem<IListData<any>> = ({ item, index }) => {

        const { value, title, selectable, selected } = item
        return (
            <CheckBox
                key={`${index}`}
                value={value}
                title={`${title}`}
                disabled={!selectable}
                selected={selected}
                onSelect={onPressItem}
            />
        )
    }

    return (
        <FlatList
            keyExtractor={(_, i) => `${i}`}
            data={list}
            renderItem={renderListItem}
            ItemSeparatorComponent={() => <Separator />}
            {...props}
        />
    )
}

export default CheckBoxGroup
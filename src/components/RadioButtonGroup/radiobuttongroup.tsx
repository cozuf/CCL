import React, { FC, useState } from "react";
import IRadioButtonGroupProps from "./props";
import { FlatList, ListRenderItem, TouchableOpacity } from "react-native";
import { RadioButton } from "../RadioButton";
import { Separator } from "../Separator";

const RadioButtonGroup: FC<IRadioButtonGroupProps<any>> = ({ data, onSelect = () => { }, renderItem, ...props }) => {
    const [list, setList] = useState<IRadioButtonGroupProps<any>["data"]>(data)

    const onPressItem = (pressedValue: any) => {
        const newList = list.map((v, i) => ({ ...v, selected: v.value === pressedValue }))
        onSelect(pressedValue, newList)
        setList(newList)
    }

    const renderListItem: ListRenderItem<IListData<any>> = (info) => {
        if (typeof renderItem === "function") {
            const { item, index } = info
            const { value } = item
            return (
                <TouchableOpacity
                    key={`${index}`}
                    activeOpacity={0.5}
                    disabled={!item.selectable}
                    style={{ opacity: item.selectable ? 1 : 0.5 }}
                    onPress={() => { onPressItem(value) }}
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
            <RadioButton
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

export default RadioButtonGroup
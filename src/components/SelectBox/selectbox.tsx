import React, { FC, Fragment, useState } from "react";
import ISelectBoxProps from "./props";
import { TouchableOpacity, View } from "react-native";
import { Separator } from "../Separator";
import { Text } from "../Text";
import { useTheme } from "../../context";
import { CCL_PAGE_NAMES } from "../../pages";

const SelectBox: FC<ISelectBoxProps<any>> = ({
    data,
    navigation,
    onSubmit,
    selectionType = "singleSelect",
    disabled,
    prefixComponent,
    suffixComponent,
    title,
    placeholder,
    error,
    containerStyle
}) => {
    const { colors, tokens } = useTheme()
    const [list, setList] = useState<ISelectBoxProps<any>["data"]>(data)
    const isError = !!error

    const onPressSlectBox = () => {
        if (navigation) {
            navigation.navigate(
                CCL_PAGE_NAMES.SELECT_BOX_PAGE,
                {
                    data: list,
                    selectionType: selectionType,
                    onSubmit: (selectedList: ISelectBoxProps<any>["data"], data: ISelectBoxProps<any>["data"]) => {
                        setList(data)
                        onSubmit(selectedList, data)
                    },
                    title: title,
                    description: ""
                }
            )
            return
        }

        console.warn("navigation prop must have been defined")
    }

    const renderTitle = () => {
        if (title) {
            return (
                <Fragment>
                    <Text fontFamily="medium" style={{ color: isError ? colors.error : colors.componentTitle }}>
                        {title}
                    </Text>
                    <Separator />
                </Fragment>
            )
        }

        return null
    }

    // FIXME Gösterim şekli düşünülmeli props ile dışarıya açılabilir
    const renderValue = () => {
        if (list.some((v) => v.selected)) {
            return (
                <Text numberOfLines={1}>
                    {list.filter((v) => v.selected).map((v) => v.title).join(", ")}
                </Text>
            )
        }

        if (placeholder) {
            return (
                <Text>
                    {placeholder}
                </Text>
            )
        }

        return null
    }

    const renderPrefix = () => {
        if (typeof prefixComponent === "function") {
            return (
                <Fragment>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        {prefixComponent()}
                    </View>
                    <Separator direction="horizontal" />
                </Fragment>

            )
        }

        return null
    }

    const renderSuffix = () => {
        if (typeof suffixComponent === "function") {
            return (
                <Fragment>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        {suffixComponent()}
                    </View>
                    <Separator direction="horizontal" />
                </Fragment>

            )
        }

        return null
    }

    return (
        <TouchableOpacity
            disabled={disabled}
            style={[
                {
                    flexDirection: "row",
                    backgroundColor: colors.componentBackground,
                    borderWidth: tokens.borders.component,
                    borderColor: isError ? colors.error : colors.componentBorder,
                    borderRadius: tokens.radiuses.component,
                    paddingHorizontal: tokens.spaces.componentHorizontal,
                    paddingVertical: tokens.spaces.componentVertical,
                    opacity: disabled ? 0.5 : 1
                },
                containerStyle
            ]}
            onPress={onPressSlectBox}>
            {renderPrefix()}
            <View
                style={{ flex: 1, justifyContent: "center" }}>
                {renderTitle()}
                {renderValue()}
            </View>
            {renderSuffix()}
        </TouchableOpacity>
    )
}

export default SelectBox
import React, { FC, Fragment, useRef, useState } from "react";
import ISelectBoxProps from "./props";
import { TouchableOpacity, View } from "react-native";
import { Separator } from "../Separator";
import { Text } from "../Text";
import { useTheme } from "../../context";
import { CCL_PAGE_NAMES } from "../../pages";
import { BottomSheet, IBottomSheetRef } from "../BottomSheet";
import Content from "./content";

const SelectBox: FC<ISelectBoxProps<any>> = ({
    data,
    navigation,
    displayType = "bottomSheet",
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
    const bottomSheetRef = useRef<IBottomSheetRef>(null)
    const [list, setList] = useState<ISelectBoxProps<any>["data"]>(data)
    const isError = !!error

    const openBottomSheet = () => {
        bottomSheetRef.current?.open()
    }

    const navigatePage = () => {
        if (navigation) {
            navigation.navigate(
                CCL_PAGE_NAMES.SELECT_BOX_PAGE,
                {
                    data: list,
                    selectionType: selectionType,
                    onSubmit: onSubmitSelection,
                    title: title,
                    description: ""
                }
            )
            return
        }

        console.warn("navigation prop must have been defined")
    }

    const onSubmitSelection = (selectedList: ISelectBoxProps<any>["data"], data: ISelectBoxProps<any>["data"]) => {
        setList(data)
        onSubmit(selectedList, data)

        if (displayType === "bottomSheet") {
            bottomSheetRef.current?.close()
            return
        }

        if (displayType === "navigate") {
            navigation.goBack()
            return
        }
    }

    const onPressSlectBox = () => {
        if (displayType === "bottomSheet") {
            openBottomSheet()
            return
        }

        if (displayType === "navigate") {
            navigatePage()
            return
        }
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
        <Fragment>
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
            <BottomSheet
                ref={bottomSheetRef}>
                <Content
                    selectionType={selectionType}
                    data={list}
                    onSubmit={onSubmitSelection}
                />
            </BottomSheet>
        </Fragment>
    )
}

export default SelectBox

import React, { FC, Fragment, useRef, useState } from "react";
import ISelectBoxProps from "./props";
import { TouchableOpacity, View } from "react-native";
import { Text } from "../Text";
import { useTheme } from "../../context";
import { CCL_PAGE_NAMES } from "../../pages";
import { BottomSheet, IBottomSheetRef } from "../BottomSheet";
import Content from "./content";
import { ComponentPrefix } from "../Base/Prefix";
import { ComponentSuffix } from "../Base/Suffix";
import { ComponentTitle } from "../Base/Title";
import { ComponentValue } from "../Base/Value";
import { ComponentError } from "../Base/Error";

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

    const onPressSelectBox = () => {
        if (displayType === "bottomSheet") {
            openBottomSheet()
            return
        }

        if (displayType === "navigate") {
            navigatePage()
            return
        }
    }

    return (
        <Fragment>
            <TouchableOpacity
                activeOpacity={0.5}
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
                onPress={onPressSelectBox}>
                <ComponentPrefix error={error} prefixComponent={prefixComponent} />
                <View
                    style={{ flex: 1, justifyContent: "center" }}>
                    <ComponentTitle error={error} title={title} />
                    {/* // FIXME Gösterim şekli düşünülmeli props ile dışarıya açılabilir */}
                    <ComponentValue placeholder={placeholder} value={list.filter((v) => v.selected).map((v) => v.title).join(", ")} />
                </View>
                <ComponentSuffix error={error} suffixComponent={suffixComponent} />
            </TouchableOpacity>
            <ComponentError error={error} />
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

import React, { FC, Fragment, useRef, useState } from "react";
import { TouchableOpacity, useWindowDimensions, View } from "react-native";
import { ComponentError, ComponentPrefix, ComponentSuffix, ComponentTitle, ComponentValue } from "../Base";
import IPickerBoxProps from "./props";
import { useTheme } from "../../context";
import { BottomSheet, IBottomSheetRef } from "../BottomSheet";
import { WheelPicker } from "../WheelPicker";
import { Separator } from "../Separator";
import { Button } from "../Button";
import { Modal } from "../Modal";

const PickerBox: FC<IPickerBoxProps<any>> = ({ data, onSubmit, displayType, disabled, containerStyle, error, placeholder, prefixComponent, suffixComponent, title, value }) => {
    const { width } = useWindowDimensions()
    const { colors, tokens } = useTheme()
    const bottomSheetRef = useRef<IBottomSheetRef>(null)
    const [visible, setVisible] = useState<boolean>(false)
    const [list, setList] = useState<IPickerBoxProps<any>["data"]>(data)

    const openPicker = () => {
        if (displayType === "bottomSheet") {
            bottomSheetRef.current?.open()
            return
        }
        if (displayType === "modal") {
            setVisible(true)
            return
        }
    }

    const closePicker = () => {
        if (displayType === "bottomSheet") {
            bottomSheetRef.current?.close()
            return
        }
        if (displayType === "modal") {
            setVisible(false)
            return
        }
    }

    const onPressPickerBox = openPicker

    const onSubmitSelection = () => {
        onSubmit(list.find((v) => v.selected))
        closePicker()
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
                        borderColor: error ? colors.error : colors.componentBorder,
                        borderRadius: tokens.radiuses.component,
                        paddingHorizontal: tokens.spaces.componentHorizontal,
                        paddingVertical: tokens.spaces.componentVertical,
                        opacity: disabled ? 0.5 : 1
                    },
                    containerStyle
                ]}
                onPress={onPressPickerBox}>
                <ComponentPrefix error={error} prefixComponent={prefixComponent} />
                <View
                    style={{ flex: 1, justifyContent: "center" }}>
                    <ComponentTitle error={error} title={title} />
                    <ComponentValue placeholder={placeholder} value={data.find((v) => v.selected)?.title as string} />
                </View>
                <ComponentSuffix error={error} suffixComponent={suffixComponent} />
            </TouchableOpacity>
            <ComponentError error={error} />
            {
                displayType === "bottomSheet" ?
                    <BottomSheet
                        ref={bottomSheetRef}>
                        <WheelPicker
                            data={list}
                            onChangeItem={(item: IListData<any>) => setList((old) => old.map((v) => ({ ...v, selected: item.value === v.value })))}
                        />
                        <Separator />
                        <Button
                            title="Tamam"
                            onPress={onSubmitSelection}
                        />
                    </BottomSheet>
                    :
                    null
            }
            {
                displayType === "modal" ?
                    <Modal
                        type="custom"
                        visible={visible}
                        onTouchOutside={() => setVisible(false)}>
                        <View
                            style={{
                                width: width * 0.8,
                                backgroundColor: colors.componentBackground,
                                borderRadius: tokens.radiuses.component,
                                padding: tokens.spaces.small
                            }}>
                            <WheelPicker
                                data={list}
                                onChangeItem={(item: IListData<any>) => setList((old) => old.map((v) => ({ ...v, selected: item.value === v.value })))}
                            />
                            <Separator />
                            <Button
                                title="Tamam"
                                onPress={onSubmitSelection}
                            />
                        </View>
                    </Modal>
                    :
                    null
            }
        </Fragment >
    )
}

export default PickerBox
import React, { FC, Fragment, useRef, useState } from "react";
import IDateTimePickerProps from "./props";
import DatePicker from "react-native-date-picker";
import { TouchableOpacity, View, useWindowDimensions } from "react-native";
import { Separator } from "../Separator";
import { Text } from "../Text";
import { useTheme } from "../../context";
import { BottomSheet, IBottomSheetRef } from "../BottomSheet";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { CloseIcon } from "../../assets";

const DateTimePicker: FC<IDateTimePickerProps> = ({
    date,
    displayType = "bottomSheet",
    onSubmit = () => { },
    onCancel = () => { },
    containerStyle,
    disabled,
    error,
    prefixComponent,
    suffixComponent,
    title,
    placeholder = "Placeholder",
    ...props
}) => {
    const { width } = useWindowDimensions()
    const { name, colors, tokens } = useTheme()
    const isError = !!error

    const [visible, setVisible] = useState<boolean>(false)
    const [currentDate, setCurrentDate] = useState<Date>(date || new Date())

    const bottomSheetRef = useRef<IBottomSheetRef>(null)

    const openDisplayer = () => {
        if (displayType === "bottomSheet") {
            bottomSheetRef.current?.open()
            return
        }

        if (displayType === "modal") {
            setVisible(true)
            return
        }
    }

    const closeDisplayer = () => {
        if (displayType === "bottomSheet") {
            bottomSheetRef.current?.close()
            return
        }

        if (displayType === "modal") {
            setVisible(false)
            return
        }
    }

    const renderPrefix = () => {
        if (prefixComponent !== undefined) {
            return (
                <Fragment>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        {prefixComponent}
                    </View>
                    <Separator direction="horizontal" />
                </Fragment>
            )
        }
        return null
    }

    const renderSuffix = () => {
        if (suffixComponent !== undefined) {
            return (
                <Fragment>
                    <Separator direction="horizontal" />
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        {suffixComponent}
                    </View>
                </Fragment>
            )
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
    }

    const renderValue = () => {
        if (date) {
            return (
                <Text fontFamily="bold">
                    {date.toISOString()}
                </Text>
            )
        }
        return (
            <Text fontFamily="bold" style={{ color: colors.placeholder }}>
                {placeholder}
            </Text>
        )
    }

    const renderError = () => {
        if (isError) {
            return (
                <Fragment>
                    <Separator />
                    <View style={{ paddingHorizontal: tokens.spaces.componentHorizontal }}>
                        <Text fontFamily="medium" style={{ color: colors.error }}>
                            {error}
                        </Text>
                    </View>
                </Fragment>
            )
        }
    }

    const renderHeader = () => {
        return (
            <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>
                <Button alignment="free" title="X" type="simplified" disabled >
                    <CloseIcon height={24} width={24} color={"transparent"} />
                </Button>
                <Text fontFamily="semibold" fontSize={18} >
                    {title}
                </Text>
                <Button alignment="free" title="X" type="simplified" onPress={closeDisplayer} >
                    <CloseIcon height={24} width={24} color={colors.text} />
                </Button>
            </View>)
    }

    const renderSubmitButton = () => {
        return (
            <Button
                title="Tamam"
                onPress={() => {
                    onSubmit(currentDate)
                    closeDisplayer()
                }}
            />
        )
    }

    return (
        <Fragment>
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
                    onPress={openDisplayer}>
                    {renderPrefix()}
                    <View style={{ flex: 1, justifyContent: "center" }}>
                        {renderTitle()}
                        {renderValue()}
                    </View>
                    {renderSuffix()}
                </TouchableOpacity>
                {renderError()}
            </Fragment>
            {
                displayType === "bottomSheet" ?
                    <BottomSheet
                        ref={bottomSheetRef}>
                        <View>
                            {renderHeader()}
                            <View>
                                <DatePicker
                                    {...props}
                                    date={currentDate || new Date()}
                                    onDateChange={setCurrentDate}
                                    style={{ width: width - tokens.spaces.regular }}
                                    theme={name}
                                />
                            </View>
                            {renderSubmitButton()}
                        </View>
                    </BottomSheet>
                    :
                    null
            }
            {
                displayType === "modal" ?
                    <Modal
                        type="default"
                        visible={visible}
                        onTouchOutside={() => setVisible(false)}>
                        <View
                            style={{
                                backgroundColor: colors.componentBackground,
                                borderRadius: tokens.radiuses.component,
                                padding: tokens.spaces.small
                            }}>
                            {renderHeader()}
                            <View>
                                <DatePicker
                                    {...props}
                                    date={currentDate || new Date()}
                                    onDateChange={setCurrentDate}
                                    style={{ width: width - (tokens.spaces.extraLarge * 2) }}
                                    theme={name}
                                />
                            </View>
                            {renderSubmitButton()}
                        </View>
                    </Modal>
                    :
                    null
            }
        </Fragment>
    )
}

export default DateTimePicker
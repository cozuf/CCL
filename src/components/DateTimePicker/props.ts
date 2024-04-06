import React, { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { DatePickerProps } from "react-native-date-picker";

interface IDateTimePickerProps extends Omit<DatePickerProps, "date" | "onDateChange"> {
    /**
     * 
     */
    placeholder?: string

    /**
     * 
     */
    date?: Date

    /**
     * @default bottomSheet
     */
    displayType?: "bottomSheet" | "modal"

    /**
     * 
     */
    onSubmit?: (selectedDate: Date) => void

    /**
     * 
     */
    onCancel?: () => void

    /**
     * 
     */
    title?: string

    /**
     * 
     */
    disabled?: boolean

    /**
     * 
     */
    prefixComponent?: ReactNode

    /**
     * 
     */
    suffixComponent?: ReactNode

    /**
     * 
     */
    error?: string

    /**
     * 
     */
    containerStyle?: StyleProp<ViewStyle>
}

export default IDateTimePickerProps
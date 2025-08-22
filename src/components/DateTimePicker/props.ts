import { StyleProp, ViewStyle } from "react-native";
import { DatePickerProps } from "react-native-date-picker";
import { IComponentErrorProps, IComponentPrefixProps, IComponentSuffixProps, IComponentTitleProps } from "../Base";

interface IDateTimePickerProps extends Omit<DatePickerProps, "date" | "onDateChange" | "title">, IComponentTitleProps, IComponentPrefixProps, IComponentSuffixProps, IComponentErrorProps {
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
    disabled?: boolean

    /**
     * 
     */
    containerStyle?: StyleProp<ViewStyle>
}

export default IDateTimePickerProps
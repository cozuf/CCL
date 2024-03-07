import React, { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

interface IRadioButtonProps {

    /**
     * @default false
     */
    disabled?: boolean

    /**
     * @requires
     */
    selected: boolean

    /**
     * @default "Başlık"
     */
    title?: string

    /**
     * 
     */
    value: any

    /**
     * 
     */
    onSelect?: (value: any) => void

    /**
     * icon component
     */
    prefixComponent?: (selected: boolean, disabled: boolean) => ReactNode


    /**
     * 
     */
    containerStyle?: StyleProp<ViewStyle>

    /**
     * 
     */
    prefixContainerStyle?: StyleProp<ViewStyle>

    /**
     * 
     */
    contentComponent?: ReactNode

    /**
     * 
     */
    contentContainerStyle?: StyleProp<ViewStyle>
}

export default IRadioButtonProps
import React, { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

interface IChipProps {

    /**
     * 
     */
    disabled?: boolean

    /**
     * 
     */
    selected: boolean

    /**
     * 
     */
    value: any

    /**
     *  @default Başlık
     */
    title?: string

    /**
     *  
     */
    onSelect?: (value: any, selected: boolean) => void

    /**
     * 
     */
    prefixComponent?: (selected: boolean, disabled: boolean) => ReactNode

    /**
     * 
     */
    contentComponent?: ReactNode

    /**
     * 
     */
    suffixComponent?: (selected: boolean, disabled: boolean) => ReactNode

    /**
     * 
     */
    containerStyle?: StyleProp<ViewStyle>
}

export default IChipProps
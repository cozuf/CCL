import React, { ReactNode } from "react";

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
}

export default IChipProps
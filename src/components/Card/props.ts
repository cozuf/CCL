import React, { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

interface ICardProps {
    /**
     * @default false
     */
    expandable?: boolean

    /**
     * @default false
     */
    isExpanded?: boolean

    /**
     * @default false
     */
    disabled?: boolean

    /**
     * it renders only expandable cards
     */
    icon?: ReactNode

    /**
     * 
     */
    headerComponent?: ReactNode

    /**
     * 
     */
    footerComponent?: ReactNode

    /**
     * 
     */
    containerStyle?: StyleProp<ViewStyle>

    /**
     * 
     */
    headerContainerStyle?: StyleProp<ViewStyle>

    /**
     * 
     */
    footerContainerStyle?: StyleProp<ViewStyle>

    /**
     * 
     */
    bodyContainerStyle?: StyleProp<ViewStyle>

}

export default ICardProps
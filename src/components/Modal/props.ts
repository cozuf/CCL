import React from "react";
import { ModalProps } from "react-native";

interface IModalProps extends Omit<ModalProps, "transparent"> {
    /**
     * @default "default"
     */
    type?: "default" | "loading" | "messaging" | "selection"

    /**
     * 
     */
    onTouchOutside?: () => void

}

export default IModalProps
import { ModalProps } from "react-native";

interface IModalProps extends Omit<ModalProps, "transparent"> {
    /**
     * @default "custom"
     */
    type?: "custom" | "loading" | "messaging" | "selection"

    /**
     * 
     */
    onTouchOutside?: () => void

    /**
     * 
     */
    title?: string

    /**
     * 
     */
    message?: string

    /**
     * 
     */
    onAcceptPress?: () => void

    /**
     * 
     */
    onRejectPress?: () => void

}

export default IModalProps
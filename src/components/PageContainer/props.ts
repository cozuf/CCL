import { ReactNode } from "react"
import { ScrollViewProps, ViewProps } from "react-native"
import { SafeAreaViewProps } from "react-native-safe-area-context"

interface IPageContainerProps extends ViewProps, SafeAreaViewProps, ScrollViewProps {
    /**
     * @default safeView
     */
    type?: "safeArea" | "view" | "safeView" | "scroll" | "safeScroll"

    /**
     * @default false
     */
    loading?: boolean

    /**
     * 
     */
    loadingComponent?: ReactNode

    /**
     * 
     */
    fallbackComponent?: ReactNode
}

export default IPageContainerProps
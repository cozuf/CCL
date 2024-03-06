import { ImageBackgroundProps, ScrollViewProps, ViewProps } from "react-native"
import { SafeAreaViewProps } from "react-native-safe-area-context"

interface IPageContainerProps extends ViewProps, SafeAreaViewProps, ScrollViewProps {
    /**
     * @default safeView
     */
    type?: "safeArea" | "view" | "safeView" | "scroll" | "safeScroll"
}

export default IPageContainerProps
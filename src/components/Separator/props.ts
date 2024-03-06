import { ViewStyle } from "react-native"

interface ISeparatorProps {
    /**
     * @default vertical
     */
    direction?: "vertical" | "horizontal"

    /**
     * @default 4
     */
    distance?: ViewStyle["height"] | ViewStyle["width"]
}

export default ISeparatorProps
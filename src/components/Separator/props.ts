import { ViewStyle } from "react-native"

interface ISeparatorProps {
    /**
     * default vertical
     */
    direction?: "vertical" | "horizontal"

    /**
     * 
     */
    distance?: ViewStyle["height"] | ViewStyle["width"]
}

export default ISeparatorProps
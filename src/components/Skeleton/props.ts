import { DimensionValue, StyleProp, ViewStyle } from "react-native";

interface ISkeletonProps {

    /**
     * @default "100%"
     */
    height?: DimensionValue

    /**
     * @default 20
     */
    width?: DimensionValue

    /**
     * @default 8
     */
    borderRadius?: number;
}

export default ISkeletonProps
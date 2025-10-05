import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"
import ISvgProps from "./props"
import { useTheme } from "../../context"

const ChevronUp: FC<ISvgProps> = ({ color = "primary", ...props }) => {
    const { colors } = useTheme()
    return (
        <Svg
            width={40}
            height={40}
            viewBox="0 0 40 40"
            fill="none"
            {...props}
        >
            <Path
                d="M20 13.333c-.667 0-1.333.334-1.667.667l-11 11c-1 1-1 2.667 0 3.667s2.667 1 3.667 0l9-9 9 9c1 1 2.667 1 3.667 0s1-2.667 0-3.667L22 14.333c-.667-.666-1.333-1-2-1z"
                fill={colors[color]}
            />
        </Svg>
    )
}

export default ChevronUp
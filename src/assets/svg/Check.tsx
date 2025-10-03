import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"
import ISvgProps from "./props"
import { useTheme } from "../../context"

const Check: FC<ISvgProps> = ({ color = "primary", ...props }) => {
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
                d="M8 20l9 8 15-16"
                stroke={colors[color]}
                strokeWidth={8}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default Check

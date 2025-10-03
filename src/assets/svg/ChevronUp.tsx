import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"
import ISvgProps from "./props"
import { useTheme } from "../../context"

const Close: FC<ISvgProps> = ({ color = "primary", ...props }) => {
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
                d="M31.099 3.599a3.75 3.75 0 115.301 5.3L25.413 19.888a.156.156 0 000 .222L36.4 31.096a3.75 3.75 0 11-5.302 5.304L20.11 25.412a.156.156 0 00-.221 0L8.9 36.4a3.75 3.75 0 11-5.303-5.303L14.585 20.11a.158.158 0 00.046-.11.158.158 0 00-.046-.111L3.597 8.9A3.75 3.75 0 018.9 3.597l10.987 10.988a.158.158 0 00.111.046.158.158 0 00.11-.046l10.99-10.986z"
                fill={colors[color]}
            />
        </Svg>
    )
}

export default Close

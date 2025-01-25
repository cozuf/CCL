import React, { FC } from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
import { useTheme } from "../../context"

const Check: FC<SvgProps> = ({ color, ...props }) => {
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
                stroke={color || colors.primary}
                strokeWidth={8}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default Check

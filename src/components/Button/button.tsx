import React, { FC, PropsWithChildren } from "react";
import IButtonProps from "./props";
import { ColorValue, TouchableOpacity } from "react-native";
import { useTheme } from "../../context";
import { Text } from "../Text";



const Button: FC<PropsWithChildren<IButtonProps> | IButtonProps> = ({ type = "filled", title, children, containerStyle, ...props }) => {
    const { colors, tokens } = useTheme()

    const BACKGROUND_COLOR: IDictionary<NonNullable<IButtonProps["type"]>, ColorValue> = {
        "filled": colors.primary,
        "outlined": colors.componentBackground,
        "simplified": colors.componentBackground
    }

    const BORDER_COLOR: IDictionary<NonNullable<IButtonProps["type"]>, ColorValue> = {
        "filled": "transparent",
        "outlined": colors.primary,
        "simplified": "transparent"
    }

    const CONTENT_COLOR: IDictionary<NonNullable<IButtonProps["type"]>, ColorValue> = {
        "filled": colors.text,
        "outlined": colors.primary,
        "simplified": colors.primary
    }

    const BORDER_WIDTH: IDictionary<NonNullable<IButtonProps["type"]>, number> = {
        "filled": 0,
        "outlined": tokens.borders.button,
        "simplified": 0
    }

    return (
        <TouchableOpacity
            style={[
                {
                    backgroundColor: BACKGROUND_COLOR[type],
                    borderWidth: BORDER_WIDTH[type],
                    borderColor: BORDER_COLOR[type],
                    borderRadius: tokens.radiuses.component,
                    paddingVertical: tokens.spaces.componentVertical,
                    paddingHorizontal: tokens.spaces.componentHorizontal,
                    alignItems: "center"
                },
                containerStyle
            ]}
            {...props}
        >
            {
                children
                    ?
                    children
                    :
                    <Text fontFamily="medium" fontSize={18} style={{ color: CONTENT_COLOR[type] }}>
                        {title}
                    </Text>
            }
        </TouchableOpacity>
    )
}

export default Button
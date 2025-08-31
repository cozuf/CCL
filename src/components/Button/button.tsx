import React, { FC, PropsWithChildren } from "react";
import IButtonProps from "./props";
import { ColorValue, FlexStyle, TouchableOpacity } from "react-native";
import { useTheme } from "../../context";
import { Text } from "../Text";



const Button: FC<PropsWithChildren<IButtonProps> | IButtonProps> = ({ type = "filled", title, alignment = "no-wrap", color = "primary", containerStyle, children, ...props }) => {
    const { colors, tokens } = useTheme()

    const BACKGROUND_COLOR: Record<NonNullable<IButtonProps["type"]>, ColorValue> = {
        "filled": colors[color],
        "outlined": colors.componentBackground,
        "simplified": "transparent"
    }

    const BORDER_COLOR: Record<NonNullable<IButtonProps["type"]>, ColorValue> = {
        "filled": "transparent",
        "outlined": colors[color],
        "simplified": "transparent"
    }

    const CONTENT_COLOR: Record<NonNullable<IButtonProps["type"]>, ColorValue> = {
        "filled": colors.buttonText,
        "outlined": colors[color],
        "simplified": colors[color]
    }

    const BORDER_WIDTH: Record<NonNullable<IButtonProps["type"]>, number> = {
        "filled": 0,
        "outlined": tokens.borders.button,
        "simplified": 0
    }

    const ALIGN_SELF: Record<NonNullable<IButtonProps["alignment"]>, FlexStyle["alignSelf"]> = {
        "no-wrap": "stretch",
        "wrap": "baseline",
        "free": undefined
    }

    const ALIGN_ITEMS: Record<NonNullable<IButtonProps["alignment"]>, FlexStyle["alignItems"]> = {
        "no-wrap": "center",
        "wrap": "center",
        "free": undefined
    }

    const BORDER_RADIUS: Record<NonNullable<IButtonProps["alignment"]>, number> = {
        "no-wrap": tokens.radiuses.component,
        "wrap": tokens.radiuses.component,
        "free": 0
    }

    const PADDING_VERTICAL: Record<NonNullable<IButtonProps["alignment"]>, number> = {
        "no-wrap": tokens.spaces.componentVertical,
        "wrap": tokens.spaces.componentVertical,
        "free": 0
    }

    const PADDING_HORIZONTAL: Record<NonNullable<IButtonProps["alignment"]>, number> = {
        "no-wrap": tokens.spaces.componentHorizontal,
        "wrap": tokens.spaces.componentHorizontal,
        "free": 0
    }

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={[
                {
                    backgroundColor: BACKGROUND_COLOR[type],
                    borderWidth: BORDER_WIDTH[type],
                    borderColor: BORDER_COLOR[type],
                    borderRadius: BORDER_RADIUS[alignment],
                    paddingVertical: PADDING_VERTICAL[alignment],
                    paddingHorizontal: PADDING_HORIZONTAL[alignment],
                    alignItems: ALIGN_ITEMS[alignment],
                    alignSelf: ALIGN_SELF[alignment],
                    opacity: props.disabled ? 0.5 : 1
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
                    <Text fontFamily="medium" fontSize={14} style={{ color: CONTENT_COLOR[type] }}>
                        {title}
                    </Text>
            }
        </TouchableOpacity>
    )
}

export default Button
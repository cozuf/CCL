import React, { FC, PropsWithChildren } from "react";
import IButtonProps from "./props";
import { ColorValue, FlexStyle, TouchableOpacity } from "react-native";
import { useTheme } from "../../context";
import { Text } from "../Text";



const Button: FC<PropsWithChildren<IButtonProps> | IButtonProps> = ({ type = "filled", title, alignment = "no-wrap", children, containerStyle, ...props }) => {
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

    const ALIGN_SELF: IDictionary<NonNullable<IButtonProps["alignment"]>, FlexStyle["alignSelf"]> = {
        "no-wrap": "stretch",
        "wrap": "baseline",
        "free": undefined
    }

    const ALIGN_ITEMS: IDictionary<NonNullable<IButtonProps["alignment"]>, FlexStyle["alignItems"]> = {
        "no-wrap": "center",
        "wrap": "center",
        "free": undefined
    }

    const BORDER_RADIUS: IDictionary<NonNullable<IButtonProps["alignment"]>, number> = {
        "no-wrap": tokens.radiuses.component,
        "wrap": tokens.radiuses.component,
        "free": 0
    }

    const PADDING_VERTICAL: IDictionary<NonNullable<IButtonProps["alignment"]>, number> = {
        "no-wrap": tokens.spaces.componentVertical,
        "wrap": tokens.spaces.componentVertical,
        "free": 0
    }

    const PADDING_HORIZONTAL: IDictionary<NonNullable<IButtonProps["alignment"]>, number> = {
        "no-wrap": tokens.spaces.componentHorizontal,
        "wrap": tokens.spaces.componentHorizontal,
        "free": 0
    }

    return (
        <TouchableOpacity
            style={[
                {
                    backgroundColor: BACKGROUND_COLOR[type],
                    borderWidth: BORDER_WIDTH[type],
                    borderColor: BORDER_COLOR[type],
                    borderRadius: BORDER_RADIUS[alignment],
                    paddingVertical: PADDING_VERTICAL[alignment],
                    paddingHorizontal: PADDING_HORIZONTAL[alignment],
                    alignItems: ALIGN_ITEMS[alignment],
                    alignSelf: ALIGN_SELF[alignment]
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
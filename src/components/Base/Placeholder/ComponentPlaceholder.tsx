import React, { FC } from "react";
import { Text } from "../../Text";
import { useTheme } from "../../../context";
import IComponentPlaceholderProps from "./props";

const ComponentPlaceholder: FC<IComponentPlaceholderProps> = ({ placeholder }) => {
    const { colors } = useTheme()

    if (placeholder) {
        return (
            <Text fontFamily="bold" style={{ color: colors.placeholder }}>
                {placeholder}
            </Text>
        )
    }

    return null
}

export default ComponentPlaceholder
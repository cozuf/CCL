import React, { FC } from "react";
import { Text } from "../../Text";
import IComponentPlaceholderProps from "./props";

const ComponentPlaceholder: FC<IComponentPlaceholderProps> = ({ placeholder }) => {

    if (placeholder) {
        return (
            <Text fontFamily="bold" color="placeholder">
                {placeholder}
            </Text>
        )
    }

    return null
}

export default ComponentPlaceholder
import React, { FC } from "react";
import { Text } from "../../Text";
import IComponentValueProps from "./props";
import { ComponentPlaceholder } from "../Placeholder";

const ComponentValue: FC<IComponentValueProps> = ({ value, placeholder }) => {
    if (value) {
        return (
            <Text fontFamily="bold" numberOfLines={1}>
                {value}
            </Text>
        )
    }

    if (placeholder) {
        return <ComponentPlaceholder placeholder={placeholder} />
    }

    return null
}

export default ComponentValue
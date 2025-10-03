import React, { FC, Fragment } from "react";
import { Text } from "../../Text";
import { Separator } from "../../Separator";
import IComponentTitleProps from "./props";

const ComponentTitle: FC<IComponentTitleProps> = ({ title, error }) => {
    if (title) {
        return (
            <Fragment>
                <Text fontFamily="medium" color={!!error ? "error" : "componentTitle"}>
                    {title}
                </Text>
                <Separator />
            </Fragment>
        )
    }

    return null
}

export default ComponentTitle
import React, { FC, Fragment } from "react";
import { Text } from "../../Text";
import { Separator } from "../../Separator";
import { useTheme } from "../../../context";
import IComponentTitleProps from "./props";

const ComponentTitle: FC<IComponentTitleProps> = ({ title, error }) => {
    const { colors } = useTheme()

    if (title) {
        return (
            <Fragment>
                <Text fontFamily="medium" style={{ color: !!error ? colors.error : colors.componentTitle }}>
                    {title}
                </Text>
                <Separator />
            </Fragment>
        )
    }

    return null
}

export default ComponentTitle
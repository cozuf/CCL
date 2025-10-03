import React, { FC, Fragment } from "react";
import { View } from "react-native";
import { Text } from "../../Text";
import { Separator } from "../../Separator";
import { useTheme } from "../../../context";
import IComponentErrorProps from "./props";

const ComponentError: FC<IComponentErrorProps> = ({ error }) => {
    const { tokens } = useTheme()

    if (!!error) {
        return (
            <Fragment>
                <Separator distance={4} />
                <View style={{ paddingHorizontal: tokens.spaces.componentHorizontal }}>
                    <Text fontFamily="medium" fontSize={10} color="error">
                        {error}
                    </Text>
                </View>
            </Fragment>
        )
    }

    return null
}

export default ComponentError
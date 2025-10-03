import React, { FC, Fragment } from "react";
import { View } from "react-native";
import { Separator } from "../../Separator";
import IComponentPrefixProps from "./props";

const ComponentPrefix: FC<IComponentPrefixProps> = ({ error, prefixComponent }) => {

    if (typeof prefixComponent === "function") {
        return (
            <Fragment>
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    {prefixComponent(!!error)}
                </View>
                <Separator direction="horizontal" />
            </Fragment>
        )
    }

    return null
}

export default ComponentPrefix
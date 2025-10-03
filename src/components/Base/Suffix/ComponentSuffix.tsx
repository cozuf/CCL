import React, { FC, Fragment } from "react";
import { View } from "react-native";
import { Separator } from "../../Separator";
import IComponentSuffixProps from "./props";

const ComponentSuffix: FC<IComponentSuffixProps> = ({ error, suffixComponent }) => {

    if (typeof suffixComponent === "function") {
        return (
            <Fragment>
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    {suffixComponent(!!error)}
                </View>
                <Separator direction="horizontal" />
            </Fragment>
        )
    }

    return null
}

export default ComponentSuffix
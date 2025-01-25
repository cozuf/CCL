import React, { FC } from "react";
import IChipProps from "./props";
import { ColorValue, TouchableOpacity, View } from "react-native";
import { Separator } from "../Separator";
import { Text } from "../Text";
import { useTheme } from "../../context";

const Chip: FC<IChipProps> = ({
    disabled,
    value,
    selected,
    onSelect = () => { },
    title = "Başlık",
    prefixComponent = () => null,
    contentComponent,
    suffixComponent = () => null,
    containerStyle
}) => {
    const { colors } = useTheme()

    const onPressComponent = () => {
        onSelect(value, !selected)
    }

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            disabled={disabled}
            style={
                [
                    {
                        flexDirection: "row",
                        alignSelf: "baseline",
                        opacity: disabled ? 0.5 : 1,
                        borderWidth: 2,
                        backgroundColor: selected ? colors.primary : colors.componentBackground,
                        borderColor: selected ? "transparent" : colors.primary,
                        borderRadius: 50
                    },
                    containerStyle
                ]
            }
            onPress={onPressComponent}
        >
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                {prefixComponent(selected, !!disabled)}
            </View>
            <Separator direction="horizontal" distance={16} />
            <View style={{ justifyContent: "center" }}>
                <Separator />
                {
                    contentComponent ?
                        contentComponent :
                        <Text
                            fontFamily="medium"
                            style={{ color: selected ? colors.text : colors.primary }}>
                            {title}
                        </Text>
                }
                <Separator />
            </View>
            <Separator direction="horizontal" distance={16} />
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                {suffixComponent(selected, !!disabled)}
            </View>
        </TouchableOpacity>
    )
}

export default Chip
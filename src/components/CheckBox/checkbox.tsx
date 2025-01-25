import React, { FC } from "react";
import ICheckProps from "./props";
import { TouchableOpacity, View } from "react-native";
import { useTheme } from "../../context";
import { Separator } from "../Separator";
import { Text } from "../Text";
import { CheckIcon } from "../../assets";

const CheckBox: FC<ICheckProps> = ({
    selected,
    value,
    disabled,
    title = "Başlık",
    contentComponent,
    prefixComponent,
    onSelect,
    prefixContainerStyle,
    containerStyle,
    contentContainerStyle
}) => {
    const { colors, tokens } = useTheme()

    const onPressComponent = () => {
        if (typeof onSelect === "function") {
            onSelect(value, !selected)
        }
    }

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            disabled={disabled}
            style={
                [
                    {
                        flexDirection: "row",
                        backgroundColor: colors.componentBackground,
                        paddingVertical: tokens.spaces.componentVertical,
                        paddingHorizontal: tokens.spaces.componentHorizontal,
                        borderRadius: tokens.radiuses.component,
                        opacity: disabled ? 0.5 : 1
                    },
                    containerStyle
                ]
            }
            onPress={onPressComponent}
        >
            <View style={[{ alignItems: "center", justifyContent: "center" }, prefixContainerStyle]}>
                {
                    typeof prefixComponent === "function" ?
                        prefixComponent(selected, !!disabled)
                        :
                        <View
                            style={{
                                height: 32,
                                width: 32,
                                backgroundColor: selected ? colors.primary : colors.componentBackground,
                                borderWidth: selected ? 0 : 2,
                                borderColor: selected ? "transparent" : colors.primary,
                                borderRadius: tokens.radiuses.extraSmall,
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                            {
                                selected ?
                                    <CheckIcon height={20} width={20} color={colors.componentBackground} />
                                    :
                                    null
                            }
                        </View>
                }
            </View>
            <Separator direction="horizontal" />
            <View style={[{ flex: 1, justifyContent: "center" }, contentContainerStyle]}>
                {
                    contentComponent ?
                        contentComponent :
                        <Text>
                            {title}
                        </Text>
                }
            </View>
        </TouchableOpacity>
    )
}

export default CheckBox
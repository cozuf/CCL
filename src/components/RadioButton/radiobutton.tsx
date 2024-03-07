import React, { FC } from "react";
import IRadioButtonProps from "./props";
import { TouchableOpacity, View } from "react-native";
import { useTheme } from "../../context";
import { Separator } from "../Separator";
import { Text } from "../Text";

const RadioButton: FC<IRadioButtonProps> = ({
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
            onSelect(value)
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
                                height: 24,
                                width: 24,
                                backgroundColor: colors.componentBackground,
                                borderWidth: 3,
                                borderColor: colors.primary,
                                borderRadius: 12,
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                            {
                                selected ?
                                    <View style={{ height: 12, width: 12, borderRadius: 6, backgroundColor: colors.primary }} />
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

export default RadioButton
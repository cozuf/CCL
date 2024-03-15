import React, { FC, PropsWithChildren } from "react";
import IModalProps from "./props";
import { ActivityIndicator, Pressable, Modal as RNMddal, SafeAreaView, View, useWindowDimensions } from "react-native";
import { useTheme } from "../../context";
import { Text } from "../Text";
import { Button } from "../Button";
import { Separator } from "../Separator";

const Modal: FC<PropsWithChildren<IModalProps>> = ({ type = "default", onTouchOutside = () => { }, children, ...props }) => {
    const { colors } = useTheme()
    return (
        <RNMddal
            animationType="fade"
            transparent={true}
            statusBarTranslucent={true}
            {...props}>
            <Pressable
                style={{
                    flex: 1, backgroundColor: colors.modalOutside,
                    alignItems: "center", justifyContent: "center"
                }}
                onPress={onTouchOutside}>
                {/* @ts-ignore */}
                <SafeAreaView edges={["top"]} />
                <Pressable>
                    <Selection />
                </Pressable>
                {/* @ts-ignore */}
                <SafeAreaView edges={["bottom"]} />
            </Pressable>
        </RNMddal>
    )
}

export default Modal

interface ILoadingProps {

}

const Loading: FC<ILoadingProps> = ({ }) => {
    const { width } = useWindowDimensions()
    const { colors, tokens } = useTheme()
    return (
        <View
            style={{
                height: width / 2,
                width: width / 2,
                backgroundColor: colors.pageBackground,
                borderRadius: tokens.radiuses.large,
                alignItems: "center",
                justifyContent: "center"
            }}>
            <ActivityIndicator
                size={"large"}
                color={colors.primary} />
        </View>

    )
}

interface IMessagingProps {
    /**
     * 
     */
    title: string

    /**
     * 
     */
    message: string
}

const Messaging: FC<IMessagingProps> = ({ title = "Title", message = "Message" }) => {
    const { width } = useWindowDimensions()
    const { colors, tokens } = useTheme()
    return (
        <View
            style={{
                width: width * 0.8,
                backgroundColor: colors.pageBackground,
                borderRadius: tokens.radiuses.component,
                padding: tokens.spaces.componentHorizontal,
                // paddingVertical: tokens.spaces.componentVertical
            }}>
            <Text fontFamily="bold" fontSize={16} style={{ textAlign: "center" }}>
                {title}
            </Text>
            <Separator />
            <Text fontFamily="medium" style={{ textAlign: "center" }}>
                {message}
            </Text>
            <Separator />
            <Button
                title="Tamam"
            />
        </View>
    )
}

interface ISelectionProps {
    /**
     * 
     */
    title: string

    /**
     * 
     */
    message: string
}

const Selection: FC<ISelectionProps> = ({ title = "Title", message = "Message" }) => {
    const { width } = useWindowDimensions()
    const { colors, tokens } = useTheme()
    return (
        <View
            style={{
                width: width * 0.8,
                backgroundColor: colors.pageBackground,
                borderRadius: tokens.radiuses.component,
                padding: tokens.spaces.componentHorizontal,
                // paddingVertical: tokens.spaces.componentVertical
            }}>
            <Text fontFamily="bold" fontSize={16} style={{ textAlign: "center" }}>
                {title}
            </Text>
            <Separator />
            <Text fontFamily="medium" style={{ textAlign: "center" }}>
                {message}
            </Text>
            <Separator />
            <View style={{ flexDirection: "row" }}>
                <Button
                    type="outlined"
                    title="İptal"
                    containerStyle={{ flex: 1 }}
                />
                <Separator direction="horizontal" />
                <Button
                    title="Tamam"
                    containerStyle={{ flex: 1 }}
                />
            </View>
        </View>
    )
}
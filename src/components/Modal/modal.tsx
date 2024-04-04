import React, { Component, FC, PropsWithChildren, ReactNode } from "react";
import IModalProps from "./props";
import { ActivityIndicator, Pressable, Modal as RNMddal, SafeAreaView, View, useWindowDimensions } from "react-native";
import { useTheme } from "../../context";
import { Text } from "../Text";
import { Button } from "../Button";
import { Separator } from "../Separator";

const Modal: FC<PropsWithChildren<IModalProps>> = ({
    type = "default",
    onTouchOutside = () => { },
    children,
    title = "Title",
    message = "Message",
    onAcceptPress = () => { },
    onRejectPress = () => { },
    ...props }) => {
    const { colors } = useTheme()

    const CHILD: IDictionary<NonNullable<IModalProps["type"]>, ReactNode> = {
        "default": children,
        "loading": <Loading />,
        "messaging": <Messaging title={title} message={message} onAcceptPress={onAcceptPress} />,
        "selection": <Selection title={title} message={message} onAcceptPress={onAcceptPress} onRejectPress={onRejectPress} />,
    }

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
                onPress={type === "default" ? onTouchOutside : undefined}>
                {/* @ts-ignore */}
                <SafeAreaView edges={["top"]} />
                <Pressable>
                    {CHILD[type]}
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

    /**
     * 
     */
    onAcceptPress?: () => void
}

const Messaging: FC<IMessagingProps> = ({ title, message, onAcceptPress }) => {
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
                onPress={onAcceptPress}
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

    /**
     * 
     */
    onAcceptPress?: () => void

    /**
     * 
     */
    onRejectPress?: () => void
}

const Selection: FC<ISelectionProps> = ({ title, message, onAcceptPress, onRejectPress }) => {
    const { width } = useWindowDimensions()
    const { colors, tokens } = useTheme()
    return (
        <View
            style={{
                width: width * 0.8,
                backgroundColor: colors.pageBackground,
                borderRadius: tokens.radiuses.component,
                padding: tokens.spaces.componentHorizontal,
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
                    onPress={onRejectPress}
                />
                <Separator direction="horizontal" />
                <Button
                    title="Tamam"
                    containerStyle={{ flex: 1 }}
                    onPress={onAcceptPress}
                />
            </View>
        </View>
    )
}
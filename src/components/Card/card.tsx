import React, { FC, PropsWithChildren, useRef, useState } from "react";
import ICardProps from "./props";
import { Animated, Easing, StyleSheet, View } from "react-native";
import { useTheme } from "../../context";
import { Separator } from "../Separator";
import { Button } from "../Button";
import { ChevronUpIcon } from "../../assets";

const Card: FC<PropsWithChildren<ICardProps>> = ({ expandable, ...props }) => {
    return expandable ? <ExpandableCard {...props} /> : <DefaultCard {...props} />
}

const DefaultCard: FC<PropsWithChildren<Omit<ICardProps, "expandable" | "isExpanded" | "icon">>> = ({
    disabled,
    containerStyle,
    headerComponent,
    headerContainerStyle,
    footerComponent,
    footerContainerStyle,
    bodyContainerStyle,
    children
}) => {
    const { colors, tokens } = useTheme()
    return (
        <View
            style={
                [
                    {
                        backgroundColor: colors.componentBackground,
                        borderWidth: tokens.borders.component,
                        borderColor: colors.componentBorder,
                        borderRadius: tokens.radiuses.component,
                        paddingVertical: tokens.spaces.componentVertical,
                        paddingHorizontal: tokens.spaces.componentHorizontal,
                        opacity: disabled ? 0.5 : 1
                    },
                    containerStyle
                ]
            }>
            <View style={[headerContainerStyle]}>
                {headerComponent}
            </View>
            <Separator />
            <View style={[bodyContainerStyle]}>
                {children}
            </View>
            <Separator />
            <View style={[footerContainerStyle]}>
                {footerComponent}
            </View>
        </View>
    )
}

const ExpandableCard: FC<PropsWithChildren<Omit<ICardProps, "expandable">>> = ({
    icon,
    isExpanded,
    disabled,
    containerStyle,
    headerComponent,
    headerContainerStyle,
    footerComponent,
    footerContainerStyle,
    bodyContainerStyle,
    children
}) => {
    const { colors, tokens } = useTheme()

    const [open, setOpen] = useState(isExpanded);
    const animatedController = useRef(new Animated.Value(isExpanded ? 1 : 0)).current
    const [bodySectionHeight, setBodySectionHeight] = useState<number>(0);

    const separatorHeight = animatedController.interpolate({
        inputRange: [0, 1],
        outputRange: [4, 8],
    });

    const bodyHeight = animatedController.interpolate({
        inputRange: [0, 1],
        outputRange: [0, bodySectionHeight],
    });

    const arrowAngle = animatedController.interpolate({
        inputRange: [0, 1],
        outputRange: ['0rad', `${Math.PI}rad`],
    });

    const toggleCard = () => {
        if (open) {
            Animated.timing(animatedController, {
                duration: 300,
                toValue: 0,
                easing: Easing.bezier(0.4, 0.0, 0.2, 1),
                useNativeDriver: false,
            }).start(({ finished }) => {
                if (finished) {
                    setOpen(false)
                }
            });
        } else {
            Animated.timing(animatedController, {
                duration: 300,
                toValue: 1,
                easing: Easing.bezier(0.4, 0.0, 0.2, 1),
                useNativeDriver: false,
            }).start(({ finished }) => {
                if (finished) {
                    setOpen(true)
                }
            });
        }
    };

    return (
        <View
            style={
                [
                    {
                        backgroundColor: colors.componentBackground,
                        borderWidth: tokens.borders.component,
                        borderColor: colors.componentBorder,
                        borderRadius: tokens.radiuses.component,
                        paddingVertical: tokens.spaces.componentVertical,
                        paddingHorizontal: tokens.spaces.componentHorizontal,
                        opacity: disabled ? 0.5 : 1
                    },
                    containerStyle
                ]
            }>
            <View style={[headerContainerStyle]}>
                {headerComponent}
            </View>
            <Animated.View style={{ height: separatorHeight }} />
            <Animated.View style={[styles.bodyBackground, { height: bodyHeight }]}>
                <View
                    style={[bodyContainerStyle, styles.bodyContainer]}
                    onLayout={event =>
                        setBodySectionHeight(event.nativeEvent.layout.height)
                    }>
                    {children}
                </View>
            </Animated.View>
            <Animated.View style={{ height: separatorHeight }} />
            <View style={[footerContainerStyle]}>
                {footerComponent}
            </View>
            <Animated.View style={{ position: "absolute", top: 0, right: 0, transform: [{ rotateZ: arrowAngle }] }}>
                <Button
                    type="simplified"
                    disabled={disabled}
                    alignment="free"
                    containerStyle={{ backgroundColor: "transparent", paddingHorizontal: 4, paddingVertical: 4 }}
                    onPress={toggleCard}
                >
                    {
                        icon ?
                            icon
                            :
                            <ChevronUpIcon height={24} width={24} color={"text"} />
                    }
                </Button>
            </Animated.View>
        </View>
    )
}

export default Card


const styles = StyleSheet.create({
    bodyBackground: {
        overflow: 'hidden',
    },
    bodyContainer: {
        position: 'absolute',
        bottom: 0,
    }
})
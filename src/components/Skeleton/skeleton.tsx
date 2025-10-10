import React, { FC, useEffect, useRef } from "react";
import { Animated } from "react-native";
import ISkeletonProps from "./props";
import { useTheme } from "../../context";

const Skeleton: FC<ISkeletonProps> = ({
    width = "100%",
    height = 20,
    borderRadius = 8,
}) => {

    const { colors } = useTheme()
    const opacityAnim = useRef(new Animated.Value(0.5)).current;

    const start = () => {
        Animated.sequence([
            Animated.timing(opacityAnim, {
                duration: 1000,
                toValue: 0.9,
                useNativeDriver: true,
            }),
            Animated.timing(opacityAnim, {
                duration: 1000,
                toValue: 0.4,
                useNativeDriver: true,
            }),
        ]).start((e) => {
            if (e.finished) {
                start();
            }
        });
    }

    useEffect(start, []);

    return (
        <Animated.View
            style={{
                backgroundColor: colors.skeleton,
                width,
                height,
                borderRadius,
                opacity: opacityAnim
            }}
        />
    );
}

export default Skeleton
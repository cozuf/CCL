import React, { PropsWithChildren, forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Animated, LayoutChangeEvent, Modal, Pressable, SafeAreaView, View, useWindowDimensions } from "react-native"
import IBottomSheetProps, { IBottomSheetRef } from "./props";
import { useTheme } from "../../context";

/**
 * It works with ref  
 * to show bottomSheet use ref.current.open()
 * to shut bottomSheet use ref.current.close()
 */
const BottomSheet = forwardRef<IBottomSheetRef, PropsWithChildren<IBottomSheetProps>>((props, ref) => {
    const { onOpened = () => { }, onClosed = () => { }, children } = props
    const { height, width } = useWindowDimensions()
    const { colors, tokens } = useTheme()

    const [visible, setVisible] = useState<boolean>(false)

    const animatedBottom = useRef(new Animated.Value(-height)).current
    const [contentHeight, setContentHeight] = useState(0)

    useImperativeHandle(ref, () => {
        return {
            open: () => { openModal() },
            close: () => { closeModal() }
        }
    });

    const openModal = () => {
        setVisible(true)
        Animated.timing(animatedBottom, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
        }).start(() => { onOpened() });
    }

    const closeModal = () => {
        Animated.timing(animatedBottom, {
            toValue: -contentHeight,
            duration: 300,
            useNativeDriver: false,
        }).start(() => {
            setVisible(false)
            onClosed()
        });
    }

    const onAnimatedLayout = (event: LayoutChangeEvent) => {
        setContentHeight(event.nativeEvent.layout.height)
    }

    return (
        <Modal
            visible={visible}
            animationType="fade"
            transparent={true}
            statusBarTranslucent={true}
        >
            <View
                style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    backgroundColor: colors.modalOutside
                }}>
                <Pressable
                    style={{ flex: 1 }}
                    onPress={closeModal}
                />
                <Animated.View
                    onLayout={onAnimatedLayout}
                    style={{
                        zIndex: 1,
                        position: "absolute",
                        width: width,
                        bottom: animatedBottom,
                        backgroundColor: colors.pageBackground,
                        borderTopLeftRadius: tokens.radiuses.semiLarge,
                        borderTopRightRadius: tokens.radiuses.semiLarge,

                        shadowColor: colors.shadow,
                        shadowOffset: { width: 0, height: 10 },
                        shadowOpacity: 0.1,
                        shadowRadius: 12,

                        elevation: 4,
                    }}>
                    {/* @ts-ignore */}
                    <SafeAreaView edges={["top"]} />
                    <View style={{ flexDirection: "row", justifyContent: "center", paddingVertical: tokens.spaces.extraSmall }}>
                        <View style={{ width: 40, height: 5, borderRadius: tokens.radiuses.extraSmall, backgroundColor: "grey" }} />
                    </View>
                    <View style={{ flex: 1, padding: 16 }}>
                        {children}
                    </View>
                    {/* @ts-ignore */}
                    <SafeAreaView edges={["bottom"]} />
                </Animated.View>
            </View>
        </Modal>
    )
})

export default BottomSheet
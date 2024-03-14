import React, { PropsWithChildren, forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Animated, LayoutChangeEvent, Modal, Pressable, SafeAreaView, View, useWindowDimensions } from "react-native"
import IBottomSheetProps, { IBottomSheetRef } from "./props";
import { useTheme } from "../../context";

/**
 * It works with ref  
 * to show bottomSheet use ref.current.open()
 * to shut bottomSheet use ref.current.close()
 */

// FIXME açılırken bazen takılma yapıyor

const BottomSheet = forwardRef<IBottomSheetRef, PropsWithChildren<IBottomSheetProps>>((props, ref) => {
    const { onOpened = () => { }, onClosed = () => { }, children } = props
    const { height: windowHeight, width: windowWidth } = useWindowDimensions()
    const { colors, tokens } = useTheme()

    const [visible, setVisible] = useState<boolean>(false)

    const animatedBottom = useRef(new Animated.Value(-windowHeight)).current
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
        const { height } = event.nativeEvent.layout
        const _Height = height > windowHeight ? windowHeight * 0.8 : height
        setContentHeight(_Height)
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
                        maxHeight: windowHeight * 0.8,
                        width: windowWidth,
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
                    <View style={{ height: "94%", padding: tokens.spaces.regular }}>
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
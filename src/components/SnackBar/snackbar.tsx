import React, { FC, Fragment, forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import ISnackBarProps, { ISnackBarRef } from "./props";
import { Animated, Easing, Pressable, SafeAreaView, StyleProp, View, ViewStyle, useWindowDimensions } from "react-native";
import { Text } from "../Text";
import { Button } from "../Button";
import { useTheme } from "../../context";

// TODO eklenmemiş propsları kullan 

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const SHORT_DURATION = 1000
const MEDIUM_DURATION = 3000
const LONG_DURATION = 5000
const INFINITE_DURATION = -1

const SHOWING_TIME = 500

/**
 * It works with ref
 * - to open use show()
 * - to close use hide()
 */

const ASD = forwardRef<ISnackBarRef, ISnackBarProps>((props, ref) => {
    const { type = "default", position = "bottom", duration = "infinite", displayForm = "bottomToTop" } = props

    const { height, width } = useWindowDimensions()
    const { colors, tokens } = useTheme()

    const top = useRef(new Animated.Value(displayForm === "bottomToTop" && position === "top" ? -100 : 8)).current
    const bottom = useRef(new Animated.Value(displayForm === "bottomToTop" && position === "bottom" ? -100 : 8)).current
    const opacity = useRef(new Animated.Value(0)).current
    const zIndex = useRef(new Animated.Value(-1)).current
    const scale = useRef(new Animated.Value(0)).current

    const [state, setState] = useState<"SHOWING" | "SHOWED" | "CLOSING" | "CLOSED">("CLOSED")

    const [isTopStartComplete, setIsTopStartComplete] = useState<boolean>(false)
    const [isTopFinishComplete, setIsTopFinishComplete] = useState<boolean>(true)

    const [isBottomStartComplete, setIsBottomStartComplete] = useState<boolean>(false)
    const [isBottomFinishComplete, setIsBottomFinishComplete] = useState<boolean>(true)

    const [isOpacityStartComplete, setIsOpacityStartComplete] = useState<boolean>(false)
    const [isOpacityFinishComplete, setIsOpacityFinishComplete] = useState<boolean>(true)

    const [isZIndexStartComplete, setIsZIndexStartComplete] = useState<boolean>(false)
    const [isZIndexFinishComplete, setIsZIndexFinishComplete] = useState<boolean>(true)

    const [isScaleStartComplete, setIsScaleStartComplete] = useState<boolean>(false)
    const [isScaleFinishComplete, setIsScaleFinishComplete] = useState<boolean>(true)

    useImperativeHandle(ref, () => ({
        show: show,
        hide: hide
    }));

    useEffect(
        () => {

        },
        [isTopStartComplete, isBottomStartComplete, isOpacityStartComplete, isZIndexStartComplete, isScaleStartComplete]
    )

    useEffect(
        () => {

        },
        [isTopFinishComplete, isBottomFinishComplete, isOpacityFinishComplete, isZIndexFinishComplete, isScaleFinishComplete]
    )

    //#region FADE
    const fadeIn = () => {
        Animated.timing(
            opacity,
            {
                duration: SHOWING_TIME,
                toValue: 1,
                useNativeDriver: false,
            }
        ).start(({ finished }) => {
            // setIsOpacityStartComplete(finished)
            // setIsOpacityFinishComplete(!finished)
        });
    }
    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                duration: SHOWING_TIME,
                toValue: 0,
                easing: Easing.back(0),
                useNativeDriver: false,
            }
        ).start(({ finished }) => {
            // setIsOpacityFinishComplete(finished)
            // setIsOpacityStartComplete(!finished)
        });
    }
    //#endregion

    //#region ELEVATION
    const front = () => {
        Animated.timing(
            zIndex,
            {
                duration: SHOWING_TIME,
                toValue: 99,
                useNativeDriver: false,
            }
        ).start(({ finished }) => {
            // setIsZIndexStartComplete(finished)
            // setIsZIndexFinishComplete(!finished)
        });
    }
    const back = () => {
        Animated.timing(
            zIndex,
            {
                duration: SHOWING_TIME,
                toValue: -99,
                useNativeDriver: false,
            }
        ).start(({ finished }) => {
            // setIsZIndexFinishComplete(finished)
            // setIsZIndexStartComplete(!finished)
        });
    }
    //#endregion

    //#region SCALE
    const scaleIn = () => {
        Animated.timing(
            scale,
            {
                duration: SHOWING_TIME,
                toValue: 1,
                useNativeDriver: false,
            }
        ).start(({ finished }) => {
            // setIsScaleStartComplete(finished)
            // setIsScaleFinishComplete(!finished)
        });
    }
    const scaleOut = () => {
        Animated.timing(
            scale,
            {
                duration: SHOWING_TIME,
                toValue: 0,
                useNativeDriver: false,
            }
        ).start(({ finished }) => {
            // setIsScaleFinishComplete(finished)
            // setIsScaleStartComplete(!finished)
        });
    }
    //#endregion

    //#region BOTTOM_TO_TOP
    const comeUp = () => {
        Animated.timing(
            position === "top" ? top : bottom,
            {
                duration: SHOWING_TIME,
                toValue: 16, // TODO ios çentikli cihaz ve android için değeri düşün
                useNativeDriver: false,
            }
        ).start(({ finished }) => {
            // setIsBottomStartComplete(finished)
        });
    }
    const goDown = () => {
        Animated.timing(
            position === "top" ? top : bottom,
            {
                duration: SHOWING_TIME,
                toValue: -(100),
                useNativeDriver: false,
            }
        ).start(({ finished }) => {
            // setIsBottomFinishComplete(finished)
        });
    }
    //#endregion

    const show = () => {
        if (displayForm === "backToFront") {
            fadeIn()
            front()
            scaleIn()
            return
        }
        if (displayForm === "bottomToTop") {
            fadeIn()
            front()
            comeUp()
            return
        }
        if (displayForm === "hideToShow") {
            fadeIn()
            front()
            return
        }
    }

    const hide = () => {
        if (displayForm === "backToFront") {
            fadeOut()
            back()
            scaleOut()
            return
        }

        if (displayForm === "bottomToTop") {
            fadeOut()
            back()
            goDown()
            return
        }

        if (displayForm === "hideToShow") {
            fadeOut()
            back()
            return
        }
    }

    const STYLE: Record<NonNullable<ISnackBarProps["displayForm"]>, StyleProp<ViewStyle>> = {
        "hideToShow": [{
            left: 0,
            right: 0
        },
        position === "top" ? { top: 0 } : { bottom: 0 }],
        "backToFront": {
            transform: [{ scale }],
        },
        "bottomToTop": position === "top" ? { top } : { bottom }
    }

    return (
        <Fragment>
            {
                position === "top" ?
                    //@ts-ignore
                    <SafeAreaView edges={["top"]} />
                    :
                    null
            }
            <AnimatedPressable
                style={[
                    {
                        position: "absolute",
                        width,
                        height: 48,
                        paddingHorizontal: tokens.spaces.componentHorizontal,
                        opacity,
                        zIndex
                    },
                    position === "top" ? { top: 8 } : { bottom: 8 },
                    {
                        left: 0,
                        right: 0
                    },
                    STYLE[displayForm]
                ]}>
                <View
                    style={
                        [
                            {
                                flex: 1,
                                backgroundColor: colors.componentBackground,
                                flexDirection: "row",
                                borderRadius: tokens.radiuses.component,
                                paddingLeft: tokens.spaces.componentHorizontal
                            },
                            {
                                shadowColor: colors.shadow,
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,

                                elevation: 3
                            },
                        ]
                    }>
                    <View style={{ flex: 1, justifyContent: "center" }}>
                        <Text fontFamily="bold">
                            MESSAGE
                        </Text>
                    </View>
                    <Button
                        type="simplified"
                        title="TAMAM"
                        containerStyle={{
                            backgroundColor: "transparent", justifyContent: "center"
                        }}
                    />
                </View>
            </AnimatedPressable>
            {
                position === "bottom" ?
                    //@ts-ignore
                    <SafeAreaView edges={["bottom"]} />
                    :
                    null
            }
        </Fragment>
    )
})

// const SnackBar: FC<ISnackBarProps> = ({ type = "default", position = "bottom", duration = "long", displayForm = "bottomToTop" }) => {
//     const { height, width } = useWindowDimensions()
//     const { colors, tokens } = useTheme()

//     const left = useRef(new Animated.Value(displayForm === "leftToRight" ? -width : width)).current
//     const right = useRef(new Animated.Value(displayForm === "rightToLeft" ? -width : width)).current
//     const bottom = useRef(new Animated.Value(0)).current
//     const opacity = useRef(new Animated.Value(0)).current
//     const zIndex = useRef(new Animated.Value(-1)).current
//     const scale = useRef(new Animated.Value(0)).current

//     useEffect(() => {
//         show()
//         setTimeout(close, LONG_DURATION);
//     }, [])

//     // const [state, setState] = useState<"SHOWING" | "SHOWED" | "CLOSING" | "CLOSED">("CLOSED")

//     // const [isLeftStartComplete, setIsLeftStartComplete] = useState<boolean>(false)
//     // const [isLeftFinishComplete, setIsLeftFinishComplete] = useState<boolean>(true)

//     // const [isRightStartComplete, setIsRightStartComplete] = useState<boolean>(false)
//     // const [isRightFinishComplete, setIsRightFinishComplete] = useState<boolean>(true)

//     // const [isBottomStartComplete, setIsBottomStartComplete] = useState<boolean>(false)
//     // const [isBottomFinishComplete, setIsBottomFinishComplete] = useState<boolean>(true)

//     // const [isOpacityStartComplete, setIsOpacityStartComplete] = useState<boolean>(false)
//     // const [isOpacityFinishComplete, setIsOpacityFinishComplete] = useState<boolean>(true)

//     // const [isZIndexStartComplete, setIsZIndexStartComplete] = useState<boolean>(false)
//     // const [isZIndexFinishComplete, setIsZIndexFinishComplete] = useState<boolean>(true)

//     // const [isScaleStartComplete, setIsScaleStartComplete] = useState<boolean>(false)
//     // const [isScaleFinishComplete, setIsScaleFinishComplete] = useState<boolean>(true)


//     //#region FADE
//     const fadeIn = () => {
//         Animated.timing(
//             opacity,
//             {
//                 duration: SHOWING_TIME,
//                 toValue: 1,
//                 useNativeDriver: false,
//             }
//         ).start(({ finished }) => {
//             // setIsOpacityStartComplete(finished)
//             // setIsOpacityFinishComplete(!finished)
//         });
//     }
//     const fadeOut = () => {
//         Animated.timing(
//             opacity,
//             {
//                 duration: SHOWING_TIME,
//                 toValue: 0,
//                 easing: Easing.back(0),
//                 useNativeDriver: false,
//             }
//         ).start(({ finished }) => {
//             // setIsOpacityFinishComplete(finished)
//             // setIsOpacityStartComplete(!finished)
//         });
//     }
//     //#endregion

//     //#region ELEVATION
//     const front = () => {
//         Animated.timing(
//             zIndex,
//             {
//                 duration: SHOWING_TIME,
//                 toValue: 99,
//                 useNativeDriver: false,
//             }
//         ).start(({ finished }) => {
//             // setIsZIndexStartComplete(finished)
//             // setIsZIndexFinishComplete(!finished)
//         });
//     }
//     const back = () => {
//         Animated.timing(
//             zIndex,
//             {
//                 duration: SHOWING_TIME,
//                 toValue: -99,
//                 useNativeDriver: false,
//             }
//         ).start(({ finished }) => {
//             // setIsZIndexFinishComplete(finished)
//             // setIsZIndexStartComplete(!finished)
//         });
//     }
//     //#endregion

//     //#region SCALE
//     const scaleIn = () => {
//         Animated.timing(
//             scale,
//             {
//                 duration: SHOWING_TIME,
//                 toValue: 1,
//                 useNativeDriver: false,
//             }
//         ).start(({ finished }) => {
//             // setIsScaleStartComplete(finished)
//             // setIsScaleFinishComplete(!finished)
//         });
//     }
//     const scaleOut = () => {
//         Animated.timing(
//             scale,
//             {
//                 duration: SHOWING_TIME,
//                 toValue: 0,
//                 useNativeDriver: false,
//             }
//         ).start(({ finished }) => {
//             // setIsScaleFinishComplete(finished)
//             // setIsScaleStartComplete(!finished)
//         });
//     }
//     //#endregion

//     //#region LEFT_TO_RIGHT
//     const fromLeft = () => {
//         Animated.timing(
//             left,
//             {
//                 duration: SHOWING_TIME,
//                 toValue: 0,
//                 useNativeDriver: false,
//             }
//         ).start(({ finished }) => {
//             // setIsLeftStartComplete(finished)
//             // setIsLeftFinishComplete(!finished)
//         });
//     }
//     const toLeft = () => {
//         Animated.timing(
//             left,
//             {
//                 duration: SHOWING_TIME,
//                 toValue: -width,
//                 useNativeDriver: false,
//             }
//         ).start(({ finished }) => {
//             // setIsLeftFinishComplete(finished)
//             // setIsLeftStartComplete(!finished)
//         });
//     }
//     //#endregion

//     //#region RIGHT_TO_LEFT
//     const fromRgiht = () => {
//         Animated.timing(
//             right,
//             {
//                 duration: SHOWING_TIME,
//                 toValue: 0,
//                 useNativeDriver: false,
//             }
//         ).start(({ finished }) => {
//             // setIsRightStartComplete(finished)
//             // setIsRightFinishComplete(!finished)
//         });
//     }
//     const toRgiht = () => {
//         Animated.timing(
//             right,
//             {
//                 duration: SHOWING_TIME,
//                 toValue: -width,
//                 useNativeDriver: false,
//             }
//         ).start(({ finished }) => {
//             // setIsRightFinishComplete(finished)
//             // setIsRightStartComplete(!finished)
//         });
//     }
//     //#endregion

//     //#region BOTTOM_TO_TOP
//     const comeUp = () => {
//         Animated.timing(
//             bottom,
//             {
//                 duration: SHOWING_TIME,
//                 toValue: 0,
//                 useNativeDriver: false,
//             }
//         ).start(({ finished }) => {
//             // setIsBottomStartComplete(finished)
//         });
//     }
//     const goDown = () => {
//         Animated.timing(
//             bottom,
//             {
//                 duration: SHOWING_TIME,
//                 toValue: -(100),
//                 useNativeDriver: false,
//             }
//         ).start(({ finished }) => {
//             // setIsBottomFinishComplete(finished)
//         });
//     }
//     //#endregion

//     const show = () => {
//         if (displayForm === "bottomToTop") {
//             fadeIn()
//             comeUp()
//         }
//     }

//     const close = () => {
//         if (displayForm === "bottomToTop") {
//             fadeOut()
//             goDown()
//         }
//     }

//     const STYLE: Record<NonNullable<ISnackBarProps["displayForm"]>, StyleProp<ViewStyle>> = {
//         "hideToShow": {
//             bottom: 0,
//             left: 0,
//             right: 0
//         },
//         "backToFront": {
//             zIndex,
//             transform: [{ scale }]
//         },
//         "leftToRight": {
//             left
//         },
//         "rightToLeft": {
//             right
//         },
//         "bottomToTop": {
//             bottom
//         }
//     }

//     return (
//         <Fragment>
//             <AnimatedPressable
//                 style={[
//                     {
//                         position: "absolute",
//                         width,
//                         height: 48,
//                         paddingHorizontal: tokens.spaces.componentHorizontal,
//                         opacity
//                     },
//                     STYLE[displayForm]
//                 ]}>
//                 <View
//                     style={{
//                         flex: 1,
//                         backgroundColor: colors.componentBackground,
//                         flexDirection: "row",
//                         borderRadius: tokens.radiuses.component,
//                         paddingLeft: tokens.spaces.componentHorizontal
//                     }}>
//                     <View style={{ flex: 1, justifyContent: "center" }}>
//                         <Text fontFamily="bold">
//                             MESSAGE
//                         </Text>
//                     </View>
//                     <Button
//                         type="simplified"
//                         title="TAMAM"
//                         containerStyle={{
//                             backgroundColor: "transparent", justifyContent: "center"
//                         }}
//                     />
//                 </View>
//             </AnimatedPressable>
//         </Fragment>
//     )
// }

export default ASD
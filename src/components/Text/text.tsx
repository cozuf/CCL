import React, { FC, PropsWithChildren } from "react";
import ITextProps from "./props";
import { Text as RNText } from "react-native";
import { useTheme } from "../../context";

const Text: FC<PropsWithChildren<ITextProps>> = ({ fontFamily = "regular", fontSize = 14, style, children, ...props }) => {
    const { fonts, colors } = useTheme()

    const defineStyle = (propStyle: any) => {
        if (Array.isArray(propStyle)) {
            const n: any[] = new Array()
            for (let i = 0; i < propStyle.length; i++) {
                const element = propStyle[i]
                n[i] = defineStyle(element)
            }
            return n
        } else {
            let newComing: any = { ...propStyle };
            if (typeof propStyle === "object") {
                if (propStyle.hasOwnProperty("fontFamily")) {
                    console.warn("use theme fonts instead of 'fontFamily' ")
                    delete newComing["fontFamily"]
                }
                if (propStyle.hasOwnProperty("fontWeight")) {
                    console.warn("use fontFamily prop to change weight of text because fontWeight does not work on android")
                    delete newComing["fontWeight"]
                }
                if (propStyle.hasOwnProperty("fontSize")) {
                    console.warn("use fontSize prop to change size of text")
                    delete newComing["fontSize"]
                }
            }
            return newComing
        }
    }

    return (
        <RNText
            {...props}
            style={[{ color: colors.text, fontFamily: fonts[fontFamily] || fontFamily, fontSize, includeFontPadding: false }, defineStyle(style)]}>
            {children}
        </RNText>
    )
}

export default Text
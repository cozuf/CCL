import { TextStyle, TextProps, StyleProp } from "react-native"

interface ITextProps extends Omit<TextProps, 'style'> {

    /**
     * @default "text"
     */
    color?: keyof CCL.ColorScheme

    /**
     * @default "regular"
     */
    fontFamily?: keyof CCL.FontScheme

    /**
     * @default 14
     */
    fontSize?: TextStyle["fontSize"]

    /**
     * @see https://reactnative.dev/docs/text#style
     */
    style?: StyleProp<Omit<TextStyle, "fontFamily" | "fontSize" | "fontWeight">>
}

export default ITextProps
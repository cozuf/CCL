import { TextStyle, TextProps, StyleProp } from "react-native"

interface ITextProps extends Omit<TextProps, 'style'> {
    /**
     * 
     */
    fontFamily?: keyof CCL.FontScheme

    /**
     * 
     */
    fontSize?: TextStyle["fontSize"]

    /**
     * @see https://reactnative.dev/docs/text#style
     */
    style?: StyleProp<Omit<TextStyle, "fontFamily" | "fontSize" | "fontWeight">>
}

export default ITextProps
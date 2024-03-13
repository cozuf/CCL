import { ColorValue } from "react-native"

declare global {
    namespace CCL {

        type ThemeNameScheme = "light" | "dark"

        interface ColorScheme {
            primary: ColorValue

            pageBackground: ColorValue

            text: ColorValue
            buttonText: ColorValue

            componentBackground: ColorValue
            componentBorder: ColorValue
            componentIcon: ColorValue
            componentTitle: ColorValue
            componentValue: ColorValue

            card: ColorValue

            error: ColorValue

            shadow: ColorValue

            modalOutside: ColorValue
        }

        interface FontScheme {
            light: string
            regular: string
            medium: string
            semibold: string
            bold: string
        }

        interface GeneralTokensScheme {
            extraLight: number
            light: number
            extraSmall: number
            small: number
            regular: number
            medium: number
            semiLarge: number
            large: number
            extraLarge: number
        }

        interface SpaceTokensScheme {
            pageVertical: number
            pageHorizontal: number
            componentVertical: number
            componentHorizontal: number
        }

        interface BorderTokensScheme {
            badge: number
            button: number
            component: number
            textInputFocused: number
        }

        interface RadiusTokensScheme {
            component: number
        }

        interface TokenScheme {
            spaces: SpaceTokensScheme & GeneralTokensScheme
            borders: BorderTokensScheme & GeneralTokensScheme
            radiuses: RadiusTokensScheme & GeneralTokensScheme
        }

        interface ThemeScheme {
            name: ThemeNameScheme
            colors: ColorScheme
            fonts: FontScheme
            tokens: TokenScheme
        }

        interface CCLScheme {
            theme: ThemeScheme
        }
    }

    type IDictionary<K extends string | number | symbol | boolean, V extends any> = {
        [key in K]: V
    }

    interface IData<T> {
        title: string
        value: T
    }

    interface IList<T> {
        key: string | number
        value: T
    }

    interface IListData<T> {
        title: string | number
        value: T
        selectable: boolean
        selected: boolean
    }

}

export { }
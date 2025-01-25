import React, { FC, PropsWithChildren, useEffect, useReducer } from "react";
import { tokens as DefaultTokens, fonts as DefaultFonts, light, dark } from "../../theme";
import { ThemeContext, ThemeContextDispatch } from "./context";

const reducer = (
    theme: CCL.ThemeScheme,
    newTheme: Partial<CCL.ThemeScheme>
): CCL.ThemeScheme => {
    const name = newTheme.name || "light"
    const colors = mergeColors("light", newTheme.colors)
    const fonts = newTheme.fonts ? mergeFonts(newTheme.fonts) : theme.fonts
    const tokens = newTheme.tokens ? mergeTokens(newTheme.tokens) : theme.tokens

    return { name, colors, fonts, tokens };
};

interface IThemeProvider {
    name: CCL.ThemeNameScheme
    colors?: Partial<CCL.ColorScheme>
    fonts?: CCL.FontScheme
    tokens?: CCL.TokenScheme
}

const ThemeProvider: FC<PropsWithChildren<IThemeProvider>> = ({ name = "light", colors, fonts, tokens, children }) => {
    const initial: CCL.ThemeScheme = {
        name,
        colors: mergeColors(name, colors),
        fonts: mergeFonts(fonts),
        tokens: mergeTokens(tokens)
    }

    const [theme, setTheme] = useReducer(reducer, initial);

    useEffect(() => {
        setTheme(initial)
    }, [name, colors, fonts, tokens])

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeContextDispatch.Provider value={setTheme}>
                {children}
            </ThemeContextDispatch.Provider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

const mergeColors = (name: IThemeProvider["name"], newColors?: Partial<CCL.ColorScheme>): CCL.ColorScheme => {
    const defaultColors = name === "light" ? light : dark

    return {
        ...defaultColors,
        ...newColors
    }
}

const mergeFonts = (newFonts?: Partial<CCL.FontScheme>): CCL.FontScheme => {
    return {
        ...DefaultFonts,
        ...newFonts
    }
}

const mergeTokens = (newTokens?: Partial<CCL.TokenScheme>): CCL.TokenScheme => {
    return {
        ...DefaultTokens,
        ...newTokens
    }
}
import React, { ComponentType } from "react"
import { useTheme, useSetTheme } from "./hook"

export function withTheme<P>(WrappedComponent: ComponentType<P>) {
    return (hocProps: Omit<P, "theme" | "setTheme">) => {
        const theme = useTheme()
        const setTheme = useSetTheme()
        return <WrappedComponent {...hocProps as P} theme={theme} setTheme={setTheme} />
    }
}
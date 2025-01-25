import React, { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "../theme";
import { GlobalStateProvider } from "../globalState";

const CCLProvider: FC<PropsWithChildren<CCL.CCLScheme>> = ({ globalState, theme, children }) => {
    return (
        <GlobalStateProvider initialGobalState={globalState}>
            <ThemeProvider {...theme}>
                {children}
            </ThemeProvider>
        </GlobalStateProvider>
    )
}

export default CCLProvider
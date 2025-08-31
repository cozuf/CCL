import React, { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "../theme";
import { GlobalStateProvider } from "../globalState";
import { ModalProvider } from "../modal";

const CCLProvider: FC<PropsWithChildren<CCL.CCLScheme>> = ({ globalState, theme, children }) => {
    return (
        <GlobalStateProvider initialGobalState={globalState}>
            <ThemeProvider {...theme}>
                <ModalProvider>
                    {children}
                </ModalProvider>
            </ThemeProvider>
        </GlobalStateProvider>
    )
}

export default CCLProvider
import React, { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "../theme";

const CCLProvider: FC<PropsWithChildren<CCL.CCLScheme>> = ({ theme, children }) => {
    return (
        <ThemeProvider {...theme}>
            {children}
        </ThemeProvider>
    )
}

export default CCLProvider
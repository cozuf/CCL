import React from "react";

export interface ISnackBarRef {
    show: () => void
    hide: () => void
}

interface ISnackBarProps {

    /**
     * @default short
     */
    duration?: "short" | "medium" | "long" | "infinite",

    /**
     * @default bottom
     */
    position?: "top" | "bottom"

    /**
     * @default hideToShow
     */
    displayForm?: "hideToShow" | "backToFront" | "leftToRight" | "rightToLeft" | "bottomToTop"

    /**
     * @default default
     */
    type?: "default" | "success" | "error"
}

export default ISnackBarProps
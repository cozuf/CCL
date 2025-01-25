import React, { ComponentType } from "react"
import { useGlobalState, useSetGlobalState } from "./hook"

export function withGlobalState<P>(WrappedComponent: ComponentType<P>) {
    return (hocProps: Omit<P, "globalState" | "setGlobalState">) => {
        const globalState = useGlobalState()
        const setGlobalState = useSetGlobalState()
        return <WrappedComponent {...hocProps as P} globalState={globalState} setGlobalState={setGlobalState} />
    }
}
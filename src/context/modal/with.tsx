import React, { ComponentType } from "react"
import { useSetModal } from "./hook"

export function withModal<P>(WrappedComponent: ComponentType<P>) {
    return (hocProps: Omit<P, "setModal">) => {
        const setModal = useSetModal()
        return <WrappedComponent {...hocProps as P} setModal={setModal} />
    }
}
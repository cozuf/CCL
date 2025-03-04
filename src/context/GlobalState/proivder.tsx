import React, { forwardRef, useReducer, Dispatch, useImperativeHandle, ReactNode } from "react";
import { GlaobalStateContext, GlobalStateDispatchContext } from "./context";
import DEFAULT_GLOBAL_STATE from "./values";
import { isObject } from "../../utils";

const reducer = (
    state: CCL.GlobalStateScheme,
    newState: Partial<CCL.GlobalStateScheme>
): CCL.GlobalStateScheme => {
    return mergeState(state, newState)
};

export interface IGLobalStateRef {
    state: CCL.GlobalStateScheme,
    setState: Dispatch<Partial<CCL.GlobalStateScheme>>
}

export interface IGlobalStateProvider {
    initialGobalState: CCL.GlobalStateScheme
    children?: ReactNode
}

const GlobalStateProvider = forwardRef<IGLobalStateRef, IGlobalStateProvider>((props, ref) => {
    const { initialGobalState, children } = props
    const [state, setState] = useReducer(reducer, initialGobalState || DEFAULT_GLOBAL_STATE);

    // TODO: değişkliği hemen algılamıyor bakılmalı
    useImperativeHandle(
        ref,
        () => ({
            state: state,
            setState: setState
        })
        ,
        [state]
    );

    return (
        <GlaobalStateContext.Provider value={state}>
            <GlobalStateDispatchContext.Provider value={setState}>
                {children}
            </GlobalStateDispatchContext.Provider>
        </GlaobalStateContext.Provider>
    );
})

export default GlobalStateProvider;

const mergeState = (oldState: CCL.GlobalStateScheme, newState: Partial<CCL.GlobalStateScheme>): CCL.GlobalStateScheme => recersiveMerge(oldState, newState)

const recersiveMerge = <T extends Object>(oldObject: Object, newObject: Object): T => {
    type oldOneObjectType = keyof typeof oldObject
    type newOneObjectType = keyof typeof newObject
    let finalObject = {}

    for (let i = 0; i < Object.keys(oldObject).length; i++) {
        const ithKey = Object.keys(oldObject)[i];
        if (!newObject.hasOwnProperty(ithKey)) {
            finalObject[ithKey as oldOneObjectType] = getValue(oldObject[ithKey as oldOneObjectType])
        } else if (isObject(newObject[ithKey as newOneObjectType]) && isObject(oldObject[ithKey as oldOneObjectType])) {
            finalObject[ithKey as oldOneObjectType] = recersiveMerge(oldObject[ithKey as oldOneObjectType], newObject[ithKey as newOneObjectType])
        } else {
            finalObject[ithKey as newOneObjectType] = getValue(newObject[ithKey as newOneObjectType])
        }
    }

    for (let i = 0; i < Object.keys(newObject).length; i++) {
        const ithKey = Object.keys(newObject)[i];
        if (!oldObject.hasOwnProperty(ithKey)) {
            finalObject[ithKey as newOneObjectType] = getValue(newObject[ithKey as newOneObjectType])
        }

    }

    return finalObject as T
}

const getValue = <T extends any>(value: any): T => value
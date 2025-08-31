import React, { FC, useEffect, useReducer } from "react";
import { Modal } from "../..";
import { ModalDispatchContext } from "./context";

const reducer = (
    state: CCL.ModalScheme,
    newState: Partial<CCL.ModalScheme>
): CCL.ModalScheme => {
    return { ...state, ...newState };
};

const ModalProvider: FC<any> = ({ children }) => {
    const initial: CCL.ModalScheme = {
        type: "custom",
        visible: false,
        children: null
    }

    const [modalProps, setModalProps] = useReducer(reducer, initial);

    useEffect(() => {
        if (!modalProps.visible) {
            setModalProps(initial)
        }
    }, [modalProps.visible])

    return (
        <ModalDispatchContext.Provider value={setModalProps}>
            {children}
            <Modal
                {...modalProps}>
                {modalProps.children}
            </Modal>
        </ModalDispatchContext.Provider>
    )
}

export default ModalProvider
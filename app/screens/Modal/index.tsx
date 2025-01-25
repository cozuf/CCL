import React, { Fragment, useEffect, useState } from "react";
import { Button, IModalProps, Modal, PageContainer, Separator, TapSelector } from "../../../src";


const TYPE: Array<IData<NonNullable<IModalProps["type"]>>> = [
    {
        title: "Default",
        value: "default"
    },
    {
        title: "Loading",
        value: "loading"
    },
    {
        title: "Messaging",
        value: "messaging"
    },
    {
        title: "Selection",
        value: "selection"
    }
]


const ModalPage = () => {
    const [visible, setVisible] = useState<boolean>(false)

    const [typeIndex, setTypeIndex] = useState<number>(0)

    const openModal = () => {
        setVisible(true)
    }

    const closeModal = () => {
        setVisible(false)
    }

    useEffect(() => {
        if (visible) {
            if (TYPE[typeIndex].value === "loading") {
                setTimeout(() => {
                    setVisible(false)
                }, 5000);
            }
        }
    }, [visible])

    return (
        <Fragment>
            <PageContainer>
                <TapSelector
                    initialIndex={typeIndex}
                    data={TYPE}
                    onTap={(v, i) => { setTypeIndex(i) }}
                />
                <Separator />
                <Button
                    title="Göster"
                    onPress={openModal}
                />
            </PageContainer>
            <Modal
                visible={visible}
                type={TYPE[typeIndex].value}
                onTouchOutside={closeModal}
                onAcceptPress={closeModal}
                onRejectPress={closeModal}>
                <Button
                    title="Kapat"
                    onPress={closeModal}
                />
            </Modal>
        </Fragment>
    )
}

export default ModalPage
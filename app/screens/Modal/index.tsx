import React, { Fragment, useState } from "react";
import { Button, Modal, PageContainer } from "../../../src";

const ModalPage = () => {
    const [visible, setVisible] = useState<boolean>(false)

    const openModal = () => {
        setVisible(true)
    }

    const closeModal = () => {
        setVisible(false)
    }

    return (
        <Fragment>
            <PageContainer>
                <Button
                    title="Göster"
                    onPress={openModal}
                />
            </PageContainer>
            <Modal
                visible={visible}
                onTouchOutside={closeModal}>
                <Button
                    title="Kapat"
                    onPress={closeModal}
                />
            </Modal>
        </Fragment>
    )
}

export default ModalPage
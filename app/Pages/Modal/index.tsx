import React, {useState} from 'react';
import {Button, Modal, PageContainer, Text} from '../../../src/Components';

const ModalPage = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const renderModal = () => {
    return (
      <Modal
        visible={visible}
        containerStyle={{flex: 1}}
        onTouchOutSide={v => {
          setVisible(v);
        }}>
        <Text
          onPress={() => {
            // setVisible(false);
          }}>
          Yusuf
        </Text>
      </Modal>
    );
  };
  return (
    <PageContainer type="Default">
      <Button
        childType="Text"
        title={'ShowModal'}
        onPress={() => {
          setVisible(true);
        }}
      />
      {renderModal()}
    </PageContainer>
  );
};

export default ModalPage;

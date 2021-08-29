import React, {useState} from 'react';
import {PageContainer, Switch} from '../../../src/Components';

const SwitchPage = () => {
  const [value, setValue] = useState<boolean>(false);
  return (
    <PageContainer type="Default">
      <Switch
        title={'Tema'}
        value={value}
        onValueChange={setValue}
        // backgroundColorOn={'red'}
        // backgroundColorOff={'grey'}
        // thumbcolor={'green'}
      />
    </PageContainer>
  );
};

export default SwitchPage;

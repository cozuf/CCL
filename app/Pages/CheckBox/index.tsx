import React, {useState} from 'react';
import {PageContainer} from '../../../src/Components';
import CheckBox from '../../../src/Components/CheckBox';

const CheckBoxPage = () => {
  const [selected, setSelected] = useState<boolean>(false);
  return (
    <PageContainer type="Default">
      <CheckBox
        selected={selected}
        onSelect={v => {
          setSelected(v);
        }}
      />
    </PageContainer>
  );
};

export default CheckBoxPage;

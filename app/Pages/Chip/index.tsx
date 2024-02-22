import React, {useState} from 'react';
import {Chip, PageContainer} from '../../../src/Components';

const ChipPage = () => {
  const [selected, setSelected] = useState<boolean>(false);
  return (
    <PageContainer type="Default">
      <Chip
        selected={selected}
        active={true}
        onSelect={() => {
          setSelected(!selected);
        }}
      />
    </PageContainer>
  );
};

export default ChipPage;

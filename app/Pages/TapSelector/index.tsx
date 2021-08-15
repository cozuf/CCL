import React from 'react';
import {PageContainer, TapSelector} from '../../../src/Components';

const TapSelectorPage = () => {
  return (
    <PageContainer type="Default">
      <TapSelector
        data={[
          {title: '1', value: 1},
          {title: '2', value: 2},
        ]}
        onTap={(index, item) => {
          console.warn(item, index);
        }}
      />
    </PageContainer>
  );
};

export default TapSelectorPage;

import React from 'react';
import {PageContainer} from '../../../src/Components';
import CheckBoxGroup from '../../../src/Components/CheckBoxGroup';
const DATA = [
  {
    selected: false,
    title: '1',
    value: 1,
  },
  {
    selected: false,
    title: '2',
    value: 2,
  },
  {
    selected: false,
    title: '3',
    value: 3,
  },
  {
    selected: false,
    title: '4',
    value: 4,
  },
  {
    selected: false,
    title: '5',
    value: 5,
  },
];
const CheckBoxGroupPage = () => {
  return (
    <PageContainer type="Default">
      <CheckBoxGroup
        data={DATA}
        onSelect={(item, index) => {
          console.log({item, index});
        }}
        onSubmit={selectedData => {
          console.log({selectedData});
        }}
      />
    </PageContainer>
  );
};

export default CheckBoxGroupPage;

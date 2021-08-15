import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {Button, PageContainer} from '../../../src/Components';

const ButtonPage = () => {
  const [clickType, setClickType] = useState<'Opacity' | 'Changeable'>(
    'Opacity',
  );
  const [type, setType] = useState<'Filled' | 'Outlined' | 'Simplied'>(
    'Filled',
  );
  const [wrap, setWrap] = useState<'wrap' | 'no-wrap' | 'free'>('free');
  return (
    <PageContainer type="Default">
      <Button type="Filled" />
      <Button type="Outlined" />
      <Button type="Simplied" />
    </PageContainer>
  );
};

export default ButtonPage;

import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, PageContainer, TapSelector} from '../../../src/Components';

const ACTIVE_DATA = [
  {
    title: 'Active',
    value: true,
  },
  {
    title: 'Passive',
    value: false,
  },
];
const CLICK_TYPES = [{title: 'Opacity'}, {title: 'Changeable'}];
const TYPES = [{title: 'Filled'}, {title: 'Outlined'}, {title: 'Simplied'}];
const WRAP_TYPES = [{title: 'wrap'}, {title: 'no-wrap'}, {title: 'free'}];

const ButtonPage = () => {
  const [active, setActive] = useState<boolean>(true);
  const [clickTypeIndex, setClickTypeIndex] = useState<number>(0);
  const [typeIndex, setTypeIndex] = useState<number>(0);
  const [wrapIndex, setWrapIndex] = useState<number>(0);
  return (
    <PageContainer type="Default">
      <Button
        disabled={!active}
        clickType={CLICK_TYPES[clickTypeIndex].title}
        title={''}
        icon={{
          family: 'Ionicons',
          name: 'close',
          size: 20,
        }}
        type={TYPES[typeIndex].title}
        wrap={WRAP_TYPES[wrapIndex].title}
      />
      <View style={{paddingVertical: 16}}>
        <TapSelector
          data={ACTIVE_DATA}
          onTap={(item, index) => {
            setActive(!active);
          }}
        />
        <View style={{paddingVertical: 8}} />
        <TapSelector
          data={CLICK_TYPES}
          onTap={(item, index) => {
            setClickTypeIndex(index);
          }}
        />
        <View style={{paddingVertical: 8}} />
        <TapSelector
          data={TYPES}
          onTap={(item, index) => {
            setTypeIndex(index);
          }}
        />
        <View style={{paddingVertical: 8}} />
        <TapSelector
          data={WRAP_TYPES}
          onTap={(item, index) => {
            setWrapIndex(index);
          }}
        />
      </View>
    </PageContainer>
  );
};

export default ButtonPage;

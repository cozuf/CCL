import React, {FC, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {CheckBox} from '..';

export interface ICheckBoxGroupProps<ItemT> {
  data: ReadonlyArray<ItemT>;
  onSelect: (item: ItemT, index: number) => void;
  onSubmit?: (selectedData: ReadonlyArray<ItemT>) => void;
  renderItem?: (info: ListRenderItemInfo<ItemT>) => React.ReactElement | null;
}

const CheckBoxGroup: FC<ICheckBoxGroupProps<any>> = ({
  data,
  onSelect,
  onSubmit,
  renderItem,
}) => {
  const [nData, setNData] = useState(data);

  const onButtonSelect = (index: number) => {
    const tData = nData.map((v, i) => ({
      ...v,
      selected: i === index ? !v.selected : v.selected,
    }));
    setNData(tData);
    const sData = tData.filter(item => item.selected);
    if (typeof onSelect === 'function') {
      onSelect(tData[index], index);
    }
    if (typeof onSubmit === 'function') {
      onSubmit(sData);
    }
  };
  const customRenderItem = (
    info: ListRenderItemInfo<any>,
  ): React.ReactElement | null => {
    const {item, index} = info;
    return (
      <CheckBox
        key={index.toString()}
        active={item.active}
        selected={item.selected}
        title={item.title}
        onSelect={selected => {
          onButtonSelect(index);
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={nData}
      renderItem={renderItem || customRenderItem}
    />
  );
};

export default CheckBoxGroup;

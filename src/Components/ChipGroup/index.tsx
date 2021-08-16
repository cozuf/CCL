import React, {FC, Fragment, useState} from 'react';
import {FlatList, ListRenderItemInfo, View} from 'react-native';
import {Chip} from '..';

export interface IChipGroupProps<ItemT> {
  data: ReadonlyArray<ItemT>;
  onSelect: (item: ItemT, index: number) => void;
  onSubmit?: (selectedData: ReadonlyArray<ItemT>) => void;
  renderItem?: (
    value: ItemT,
    index: number,
    array: readonly ItemT[],
  ) => React.ReactElement | null;
}

const ChipGroup: FC<IChipGroupProps<any>> = ({
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
    item: any,
    index: number,
    array: readonly any[],
  ): React.ReactElement | null => {
    return (
      <Fragment key={index.toString()}>
        <Chip
          active={item.active}
          selected={item.selected}
          title={item.title}
          onSelect={selected => {
            onButtonSelect(index);
          }}
        />
        <View style={{width: 8}} />
      </Fragment>
    );
  };
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      {nData.map(renderItem || customRenderItem)}
    </View>
  );
};

export default ChipGroup;

import React, {FC, useState} from 'react';
import {FlatList, FlatListProps, ListRenderItemInfo, Omit} from 'react-native';
import {CheckBox} from '..';

export interface ICheckBoxGroupProps<ItemT> {
  /**
   * Array of selectable options.
   * it must contain {title} and {value} keys.
   * {title} to show
   * {value} to operate
   *
   * it is better to include {active} and {selected} keys.
   * {active} to be selectable
   * {selected} to show selected before
   */
  data: ReadonlyArray<ItemT>;

  /**
   * invokes when click the option
   */
  onSelect: (item: ItemT, index: number) => void;

  /**
   * invokes when selection complete and press submit button
   */
  onSubmit?: (selectedData: ReadonlyArray<ItemT>) => void;

  /**
   * callback if you want render custom item
   */
  renderItem?: (info: ListRenderItemInfo<ItemT>) => React.ReactElement | null;
}

export type ICheckBoxGroupTypes = ICheckBoxGroupProps<any> &
  Omit<FlatListProps<any>, 'data' | 'renderItem'>;

const CheckBoxGroup: FC<ICheckBoxGroupTypes> = ({
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
        onSelect={() => {
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

// TODO: maxchoice minchoice ekle

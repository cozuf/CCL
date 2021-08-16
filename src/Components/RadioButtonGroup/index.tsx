import React, {FC, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {RadioButton} from '..';

export interface IRadioButtonGroupProps<ItemT> {
  data: ReadonlyArray<ItemT>;
  onSelect: (item: ItemT, index: number) => void;
  renderItem?: (info: ListRenderItemInfo<ItemT>) => React.ReactElement | null;
}

const RadioButtonGroup: FC<IRadioButtonGroupProps<any>> = ({
  data,
  onSelect,
  renderItem,
}) => {
  const [nData, setNData] = useState(data);

  const onButtonSelect = (index: number) => {
    const tData = nData.map((v, i) => ({...v, selected: i === index}));
    setNData(tData);
    const sData = tData.filter(item => item.selected);
    onSelect(sData[0], index);
  };

  const customRenderItem = (
    info: ListRenderItemInfo<any>,
  ): React.ReactElement | null => {
    const {item, index} = info;
    return (
      <RadioButton
        key={index.toString()}
        selected={item.selected}
        title={item.title}
        value={item.value}
        onSelect={() => {
          onButtonSelect(index);
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item: any, index: number) => index.toString()}
      data={nData}
      renderItem={renderItem || customRenderItem}
    />
  );
};

export default RadioButtonGroup;

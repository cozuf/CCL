import React, {FC, useState} from 'react';
import {Omit} from 'react-native';
import {Button, IButtonProps} from '..';

export interface ITapSelectorProps<ItemT> {
  data: ReadonlyArray<ItemT>;
  onTap: (selectedItem: ItemT, selectedIndex: number) => void;
}

const TapSelector: FC<
  ITapSelectorProps<any> & Omit<IButtonProps, 'onPress' | 'title'>
> = ({data, onTap, ...props}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const onButtonTap = (index: number) => {
    setSelectedIndex(index);
    onTap(data[index], index);
  };

  const calculateIndex = (index: number): number => {
    if (index > data.length - 1) {
      return 0;
    } else {
      return index;
    }
  };

  return (
    <Button
      type="Outlined"
      title={data[selectedIndex].title}
      onPress={() => {
        onButtonTap(calculateIndex(selectedIndex + 1));
      }}
      {...props}
    />
  );
};

export default TapSelector;

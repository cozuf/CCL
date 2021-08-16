import React, {FC, useState} from 'react';
import {Button} from '..';

export interface IChipProps {
  selected: boolean;
  title: string;
  active?: boolean;
  onSelect: (selected: boolean) => void;
}

const Chip: FC<IChipProps> = ({
  selected = false,
  title = `Chip ${selected}`,
  active = true,
  onSelect = () => {},
}) => {
  const [isSelected, setIsSelected] = useState<boolean>(selected);
  return (
    <Button
      disabled={!active}
      clickType={'Opacity'}
      wrap={'wrap'}
      type={selected ? 'Filled' : 'Outlined'}
      title={title}
      onPress={() => {
        setIsSelected(!isSelected);
        if (typeof onSelect === 'function') {
          onSelect(!isSelected);
        }
      }}
    />
  );
};

export default Chip;

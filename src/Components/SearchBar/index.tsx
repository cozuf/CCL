import React, {FC} from 'react';
import {Omit} from 'react-native';
import {ITextInputTypes, TextInput} from '..';
export interface ISearchBarProps {
  value: string;
  onSearch: (text: string) => void;
}

export type ISearchBarTypes = ISearchBarProps &
  Omit<ITextInputTypes, 'value' | 'onChangeText'>;

const SearchBar: FC<ISearchBarTypes> = ({
  title = '',
  value,
  onSearch,
  ...props
}) => {
  return (
    <TextInput
      title={title}
      value={value}
      onChangeText={onSearch}
      icon={{
        family: 'Ionicons',
        name: 'search',
        size: 24,
      }}
      cleanable={true}
      {...props}
    />
  );
};

export default SearchBar;

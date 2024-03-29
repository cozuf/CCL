// TODO:3 tür yapılır "MODAL" | "BOTTOMSHEET" | "PAGE"
// TODO: Searchable olabilir Searchable ise BottomSheet olamaz

import React, { FC, useState } from 'react';
import {
  FlatListProps,
  ListRenderItemInfo,
  Omit,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Seperator, Text } from '..';
import { NavigationProp } from '@react-navigation/core';
import { ParamListBase } from '@react-navigation/routers';
import SelectBoxModal from './Modal';
import { useThemeContext } from '../../Context/ThemeContext';

export interface ISelectBoxProps<ItemT> {
  /**
   * @default true
   */
  active?: boolean;
  /**
   * type to display
   * @default Modal
   */
  displayType: 'Modal' | 'Page';

  /**
   * type to choose
   * @default SingleSelect
   */
  selectionType: 'SingleSelect' | 'MultiSelect';

  /**
   * @default Başlık
   */
  title?: string;

  /**
   * @default Placeholder
   */
  placeholder?: string;

  /**
   * set true if you want to search in given list
   * @default false
   */
  searchable?: boolean;

  /**
   *
   */
  searchText?: string;

  /**
   * invokes when enter text to input
   */
  onSearch?: (text: string) => void;

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
  onSelect?: (item: ItemT, index: number) => void;

  /**
   * invokes when selection complete and press submit button
   */
  onSubmit?: (selectedData: ReadonlyArray<ItemT>) => void;

  /**
   * callback if you want render custom item
   */
  renderItem?: (info: ListRenderItemInfo<ItemT>) => React.ReactElement | null;

  /**
   *
   */
  navigation?: NavigationProp<ParamListBase>;

  /**
   *
   */
  page?: string;

  /**
   * 
   */
  maxChoice?: number

  /**
   * 
   */
  minChoice?: number
}

export type ISelectBoxTypes = ISelectBoxProps<any> &
  Omit<FlatListProps<any>, 'data' | 'renderItem'>;

const SelectBox: FC<ISelectBoxTypes> = ({
  active = true,
  displayType = 'Modal',
  selectionType = 'SingleSelect',
  title = 'Başlık',
  placeholder = 'Placeholder',
  searchable = false,
  searchText,
  onSearch,
  data,
  onSelect,
  onSubmit,
  renderItem,
  navigation,
  page = 'SelectPage',
  maxChoice,
  minChoice
}) => {
  const [dataList, setDataList] = useState<any[]>(data as any[]);
  const [value, setValue] = useState<string>(searchText || '');
  const [visible, setVisible] = useState<boolean>(false);
  const [theme] = useThemeContext();
  const { selectBox } = theme.colors;

  const renderModal = () => {
    return (
      <SelectBoxModal
        visible={visible}
        setVisible={setVisible}
        searchable={searchable}
        value={value}
        setValue={setValue}
        onSearch={text => {
          setValue(text);
          if (text.length > 0) {
            const nDataList = data.filter(v =>
              v.title?.toLowerCase().includes(text.toLowerCase()),
            );
            setDataList(nDataList);
          } else {
            setDataList(data as any[]);
          }
          if (typeof setValue === 'function') {
            setValue(text);
          }
        }}
        data={dataList}
        setData={setDataList}
        selectionType={selectionType}
        minChoice={minChoice}
        maxChoice={maxChoice}
      />
    );
  };

  const renderRest = () => {
    switch (displayType) {
      case 'Modal':
        return renderModal();
    }
  };

  const onPress = () => {
    switch (displayType) {
      case 'Modal':
        setVisible(true);
        break;
      case 'Page':
        if (!navigation) {
          console.error('Navigation is undefined');
          return;
        }
        if (!page) {
          console.error('page prop is undefined');
          return;
        }

        navigation.navigate(page, {
          title,
          data: dataList,
          setData: setDataList,
          selectionType,
          searchable,
          searchText,
          onSearch: (
            _navigation: NavigationProp<ParamListBase>,
            text: string,
          ) => {
            setValue(text);
            if (text.length > 0) {
              const nDataList = data.filter(v =>
                v.title?.toLowerCase().includes(text.toLowerCase()),
              );
              setDataList(nDataList);
            } else {
              setDataList(data as any[]);
            }
            if (typeof setValue === 'function') {
              setValue(text);
            }
            _navigation.setParams({ searchText: text });
          },
          onSelect: (
            _navigation: NavigationProp<ParamListBase>,
            item: any,
            index: number,
          ) => {
            if (typeof onSelect === 'function') {
              onSelect(item, index);
            }
            const nData = dataList.map((v, i) => ({
              ...v,
              selected: index === i ? !v.selected : v.selected,
            }));
            setDataList(nData);
            _navigation.setParams({ data: nData });
          },
          onSubmit: (selectedData: any[]) => {
            if (typeof onSubmit === 'function') {
              onSubmit(dataList.filter(v => v.selected));
            }
          },
          renderItem,
          minChoice: minChoice,
          maxChoice: maxChoice
        });

        break;
    }
  };

  const renderPlaceholder = () => {
    const selectedData = dataList.filter(v => v.selected);
    if (selectedData.length > 0) {
      let result: string = '';
      selectedData.map(v => {
        result += v.title + ', ';
      });
      return result.substr(0, result.length - 2);
    } else {
      return placeholder;
    }
  };

  return (
    <TouchableOpacity
      disabled={!active}
      onPress={onPress}
      style={[
        {
          backgroundColor: selectBox[active ? 'active' : 'passive'].background,
          borderColor: selectBox[active ? 'active' : 'passive'].border,
        },
        styles.container,
      ]}>
      {
        <Text
          style={{
            color: selectBox[active ? 'active' : 'passive'].title,
          }}>
          {title}
        </Text>
      }
      {<Seperator.Vertical height={4} />}
      {
        <Text
          numberOfLines={1}
          style={{
            color: renderPlaceholder() === placeholder ? selectBox[active ? 'active' : 'passive'].placeholder : selectBox[active ? 'active' : 'passive'].value,
          }}>
          {renderPlaceholder()}
        </Text>
      }
      {renderRest()}
    </TouchableOpacity>
  );
};

export default SelectBox;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

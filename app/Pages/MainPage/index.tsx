import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Button, PageContainer, SearchBar} from '../../../src/Components';

type ComponentListType = {
  name: string;
  navigation: string;
};

const COMPONENTS: ComponentListType[] = [
  {
    name: 'Text',
    navigation: 'TextPage',
  },
  {
    name: 'Icon',
    navigation: 'IconPage',
  },
  {
    name: 'TextInput',
    navigation: 'TextInputPage',
  },
  {
    name: 'ActivityIndicator',
    navigation: 'ActivityIndicatorPage',
  },
  {
    name: 'Button',
    navigation: 'ButtonPage',
  },
  {
    name: 'TapSelector',
    navigation: 'TapSelectorPage',
  },
  {
    name: 'RadioButton',
    navigation: 'RadioButtonPage',
  },
  {
    name: 'RadioButtonGroup',
    navigation: 'RadioButtonGroupPage',
  },
  {
    name: 'CheckBox',
    navigation: 'CheckBoxPage',
  },
  {
    name: 'CheckBoxGroup',
    navigation: 'CheckBoxGroupPage',
  },
  {
    name: 'Chip',
    navigation: 'ChipPage',
  },
  {
    name: 'ChipGroup',
    navigation: 'ChipGroupPage',
  },
  {
    name: 'Badge',
    navigation: 'BadgePage',
  },
  {
    name: 'Image',
    navigation: 'ImagePage',
  },
  {
    name: 'SearchBar',
    navigation: 'SearchBarPage',
  },
  {
    name: 'Modal',
    navigation: 'ModalPage',
  },
  {
    name: 'SelectBox',
    navigation: 'SelectBoxPage',
  },
  {
    name: 'DateTimePicker',
    navigation: 'DateTimePickerPage',
  },
  {
    name: 'Switch',
    navigation: 'SwitchPage',
  },
  {
    name: 'Colors',
    navigation: 'ColorsPage',
  },
];

const MainPage = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState<string>('');
  const [componentList, setComponentList] =
    useState<ComponentListType[]>(COMPONENTS);

  return (
    <PageContainer type={'Default'}>
      <View style={{paddingBottom: 16}}>
        <SearchBar
          placeholder={'Ara'}
          icon={{
            family: 'Ionicons',
            name: 'search',
            size: 24,
          }}
          cleanable={true}
          value={searchText}
          onSearch={(text: string) => {
            setSearchText(text);
            if (text.length > 0) {
              const nComponentList: ComponentListType[] = COMPONENTS.filter(
                component =>
                  component.name.toLowerCase().includes(text.toLowerCase()),
              );
              setComponentList(nComponentList);
            } else {
              setComponentList(COMPONENTS);
            }
          }}
        />
      </View>

      <FlatList
        bounces={false}
        keyExtractor={(item, index) => item.name + index.toString()}
        data={componentList}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View key={item.name + index.toString()}>
              <Button
                type="Outlined"
                title={item.name}
                onPress={() => {
                  navigation.navigate(item.navigation);
                }}
              />
            </View>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
    </PageContainer>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  seperator: {
    height: 8,
  },
});

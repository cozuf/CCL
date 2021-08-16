import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Button, PageContainer} from '../../../src/Components';

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
    name: 'BadgePage',
    navigation: 'BadgePage',
  },
];

const MainPage = () => {
  const navigation = useNavigation();
  return (
    <PageContainer type={'Default'}>
      <FlatList
        bounces={false}
        keyExtractor={(item, index) => item.name + index.toString()}
        data={COMPONENTS}
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

import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {FlatList, View} from 'react-native';
import {PageContainer, Text} from '../../../src/Components';

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
];

const MainPage = () => {
  const navigation = useNavigation();
  return (
    <PageContainer type={'Default'}>
      <FlatList
        keyExtractor={(item, index) => item.name + index.toString()}
        data={COMPONENTS}
        renderItem={({item, index}) => {
          return (
            <View key={item.name + index.toString()}>
              <Text
                onPress={() => {
                  navigation.navigate(item.navigation);
                }}>
                {item.name}
              </Text>
            </View>
          );
        }}
      />
    </PageContainer>
  );
};

export default MainPage;

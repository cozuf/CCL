import React from 'react';
import {FlatList} from 'react-native';
import {PageContainer, Icon} from '../../../src/Components';
import {IIconProps} from '../../../src/Components/Icon';
const SIZE = 30;
const COLOR = '#27190E';

const ICONS: IIconProps[] = [
  {
    family: 'AntDesign',
    name: 'facebook-square',
    size: SIZE,
    color: COLOR,
  },
  {
    family: 'Entypo',
    name: 'facebook-with-circle',
    size: SIZE,
    color: COLOR,
  },
  {
    family: 'EvilIcons',
    name: 'sc-facebook',
    size: SIZE,
    color: COLOR,
  },
  {
    family: 'Feather',
    name: 'facebook',
    size: SIZE,
    color: COLOR,
  },
  {
    family: 'FontAwesome',
    name: 'facebook',
    size: SIZE,
    color: COLOR,
  },
  {
    family: 'FontAwesome5',
    name: 'facebook',
    size: SIZE,
    color: COLOR,
  },
  {
    family: 'Fontisto',
    name: 'facebook',
    size: SIZE,
    color: COLOR,
  },
  {
    family: 'Foundation',
    name: 'social-facebook',
    size: SIZE,
    color: COLOR,
  },
  {
    family: 'Ionicons',
    name: 'logo-facebook',
    size: SIZE,
    color: COLOR,
  },
  {
    family: 'MaterialCommunityIcons',
    name: 'facebook',
    size: SIZE,
    color: COLOR,
  },
  {
    family: 'MaterialIcons',
    name: 'facebook',
    size: SIZE,
    color: COLOR,
  },
  {
    family: 'SimpleLineIcons',
    name: 'social-facebook',
    size: SIZE,
    color: COLOR,
  },
  {
    family: 'Zocial',
    name: 'facebook',
    size: SIZE,
    color: COLOR,
  },
];

const IconPage = () => {
  return (
    <PageContainer type="Default">
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={ICONS}
        renderItem={({item, index}) => {
          return (
            <Icon
              key={index.toString()}
              family={item.family}
              name={item.name}
              size={item.size}
              color={item.color}
            />
          );
        }}
      />
    </PageContainer>
  );
};

export default IconPage;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PAGES_NAMES} from '../Pages';
import TextPage from '../Pages/Text';
import MainPage from '../Pages/MainPage';
import IconPage from '../Pages/Icon';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={PAGES_NAMES.MainPage}>
      <Stack.Screen name={PAGES_NAMES.MainPage} component={MainPage} />

      <Stack.Screen name={PAGES_NAMES.TextPage} component={TextPage} />
      <Stack.Screen name={PAGES_NAMES.IconPage} component={IconPage} />
    </Stack.Navigator>
  );
};

export default Router;

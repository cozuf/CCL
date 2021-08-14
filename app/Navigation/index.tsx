import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PAGES_NAMES} from '../Pages';
//#region Pages
import TextPage from '../Pages/Text';
import MainPage from '../Pages/MainPage';
import IconPage from '../Pages/Icon';
import TextInputPage from '../Pages/TextInput';

//#endregion

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}
      headerMode="screen"
      initialRouteName={PAGES_NAMES.MainPage}>
      <Stack.Screen name={PAGES_NAMES.MainPage} component={MainPage} />

      <Stack.Screen name={PAGES_NAMES.TextPage} component={TextPage} />
      <Stack.Screen name={PAGES_NAMES.IconPage} component={IconPage} />
      <Stack.Screen
        name={PAGES_NAMES.TextInputPage}
        component={TextInputPage}
      />
    </Stack.Navigator>
  );
};

export default Router;

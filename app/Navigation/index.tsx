import React from 'react';
import {useColorScheme} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {PAGES_NAMES} from '../Pages';
import {FONTS} from '../../src/Assets';
//#region Pages
import TextPage from '../Pages/Text';
import MainPage from '../Pages/MainPage';
import IconPage from '../Pages/Icon';
import TextInputPage from '../Pages/TextInput';
import ActivityIndicatorPage from '../Pages/ActivityIndicator';
import ButtonPage from '../Pages/Button';
import TapSelectorPage from '../Pages/TapSelector';

//#endregion

const Stack = createStackNavigator();

const Router = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: FONTS.semibold,
          fontWeight: undefined,
          color: isDarkMode ? '#FFFFFF' : '#000000',
        },
        headerStyle: {
          backgroundColor: isDarkMode ? '#000000' : '#FFFFFF',
          elevation: 0,
          shadowColor: 'transparent',
          shadowOpacity: undefined,
          shadowRadius: undefined,
          shadowOffset: {
            height: 0,
            width: 0,
          },
        },
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
      <Stack.Screen
        name={PAGES_NAMES.ActivityIndicatorPage}
        component={ActivityIndicatorPage}
      />
      <Stack.Screen name={PAGES_NAMES.ButtonPage} component={ButtonPage} />
      <Stack.Screen
        name={PAGES_NAMES.TapSelectorPage}
        component={TapSelectorPage}
      />
    </Stack.Navigator>
  );
};

export default Router;

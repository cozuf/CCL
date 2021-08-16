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
import RadioButtonPage from '../Pages/RadioButton';
import RadioButtonGroupPage from '../Pages/RadioButtonGroup';
import CheckBoxPage from '../Pages/CheckBox';
import CheckBoxGroupPage from '../Pages/CheckBoxGroup';
import ChipPage from '../Pages/Chip';
import {dark, light} from '../../src/Theme/Variants';
import ChipGroupPage from '../Pages/ChipGroup';

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
          color: isDarkMode ? dark.text.active : light.text.active,
        },
        headerStyle: {
          backgroundColor: isDarkMode
            ? dark.pageContainer.background
            : light.pageContainer.background,
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
      <Stack.Screen
        name={PAGES_NAMES.RadioButtonPage}
        component={RadioButtonPage}
      />
      <Stack.Screen
        name={PAGES_NAMES.RadioButtonGroupPage}
        component={RadioButtonGroupPage}
      />
      <Stack.Screen name={PAGES_NAMES.CheckBoxPage} component={CheckBoxPage} />
      <Stack.Screen
        name={PAGES_NAMES.CheckBoxGroupPage}
        component={CheckBoxGroupPage}
      />
      <Stack.Screen name={PAGES_NAMES.ChipPage} component={ChipPage} />
      <Stack.Screen
        name={PAGES_NAMES.ChipGroupPage}
        component={ChipGroupPage}
      />
    </Stack.Navigator>
  );
};

export default Router;

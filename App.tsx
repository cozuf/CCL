import React, { FC } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import Router from './app/navigation';
import { CCLProvider, darkColors, lightColors, tokens, fonts, useTheme } from './src';
import { SafeAreaView } from 'react-native-safe-area-context';


const Child: FC<any> = ({ }) => {
  const { name } = useTheme()
  const isDarkMode = name === "dark"

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer
      theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Router />
    </NavigationContainer>
  )
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  // const NavigationTheme: Theme = {
  //   dark: isDarkMode,
  //   colors: {
  //     primary: isDarkMode ? 'rgb(0, 210, 170)' : 'rgb(255, 45, 85)',
  //     background: isDarkMode ? 'rgb(13,13,13)' : 'rgb(242, 242, 242)',
  //     card: isDarkMode ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)',
  //     text: isDarkMode ? 'rgb(227, 227, 225)' : 'rgb(28, 28, 30)',
  //     border: 'rgb(199, 199, 204)',
  //     notification: 'rgb(255, 69, 58)',
  //   },
  // };

  return (
    <CCLProvider
      globalState={{}}
      theme={{
        name: isDarkMode ? "dark" : "light",
        colors: isDarkMode ? darkColors : lightColors,
        fonts,
        tokens
      }}>
      <Child />
    </CCLProvider>
  );
}

export default App;

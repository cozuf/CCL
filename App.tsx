/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './app/Navigation';
import {dark, light} from './src/Theme/Variants';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeAreaContainer}>
        <StatusBar
          backgroundColor={isDarkMode ? dark.statusbar : light.statusbar}
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
        <Router />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
});

// TODO: Tüm comoponentlere testID ekle

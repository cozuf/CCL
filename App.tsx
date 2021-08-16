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
          backgroundColor={
            isDarkMode ? dark.common.statusbar : light.common.statusbar
          }
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
// TODO: Tüm comoponentlerde eksikleri tamamla (containerStyle vs.)
// TODO: Tüm padding, borderWidth, borderRadius belirle color scheme gibi
// TODO: Örnek Sayfalar da varyantları ekle
// TODO: Düzenlemsi gerekn componentleri unutma
// TODO: Yapılacak componentler var (modal vs.)
// TODO: Context Yapısını oluştur

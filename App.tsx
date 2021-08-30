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
import ThemeProvider from './src/Context/ThemeContext';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
});

// TODO: Tüm comoponentlere testID ekle
// TODO: Inner Style'ları kaldır
// TODO: Listelemeli componentlerde searchable'yi unutma
// TODO: SelectBox componentini tekrar gözden geçir
// TODO: Tüm comoponentlerde eksikleri tamamla (containerStyle vs.)
// TODO: Tüm padding, borderWidth, borderRadius belirle color scheme gibi
// TODO: CheckBoxGroup ve RadioButtonGroup alt borderları kaldır seperator olarak ver
// TODO: Örnek Sayfalar da varyantları ekle
// TODO: Düzenlemsi gereken componentleri unutma
// TODO: Yapılacak componentler var (modal vs.)
// TODO: Context Yapısını oluştur
// TODO: Tema Context
// TODO: Style Context
// TODO: Language Context
/**
 * theme.colors|styles|fonts
 * setTheme({colors,styles,fonts})
 */

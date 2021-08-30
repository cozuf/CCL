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
import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './app/Navigation';
import ThemeProvider, {useThemeContext} from './src/Context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Child />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;

const Child = () => {
  const [theme] = useThemeContext();
  const {common} = theme.colors;

  return (
    <SafeAreaView
      style={[styles.safeAreaContainer, {backgroundColor: common.statusbar}]}>
      <StatusBar
        backgroundColor={common.statusbar}
        barStyle={theme.name === 'Dark' ? 'light-content' : 'dark-content'}
      />
      <Router />
    </SafeAreaView>
  );
};

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

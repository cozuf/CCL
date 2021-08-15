import React, {FC} from 'react';
import {
  ViewProps,
  ScrollViewProps,
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TOKENS} from '../../Theme';
import {dark, light} from '../../Theme/Variants';

interface IPageContainerProps {
  type: 'SafeArea' | 'Default' | 'Scroll';
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

const PageContainer: FC<IPageContainerProps & (ViewProps | ScrollViewProps)> =
  ({type = 'Default', style, contentContainerStyle, children, ...props}) => {
    const isDarkMode = useColorScheme() === 'dark';
    const COLOR = isDarkMode ? dark.pageBackground : light.pageBackground;
    switch (type) {
      case 'SafeArea':
        return (
          <SafeAreaView
            style={[styles.view, {backgroundColor: COLOR}, style]}
            {...props}>
            {children}
          </SafeAreaView>
        );

      case 'Scroll':
        return (
          <ScrollView
            style={[style]}
            contentContainerStyle={[
              styles.scrollview,
              {backgroundColor: COLOR},
              contentContainerStyle,
            ]}
            {...props}>
            {children}
          </ScrollView>
        );
      case 'Default':
      default:
        return (
          <View
            style={[styles.view, {backgroundColor: COLOR}, style]}
            {...props}>
            {children}
          </View>
        );
    }
  };

export default PageContainer;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingVertical: TOKENS.paddings.pageVertical,
    paddingHorizontal: TOKENS.paddings.pageHorizontal,
  },
  scrollview: {
    flex: 1,
    paddingVertical: TOKENS.paddings.pageVertical,
    paddingHorizontal: TOKENS.paddings.pageHorizontal,
  },
});

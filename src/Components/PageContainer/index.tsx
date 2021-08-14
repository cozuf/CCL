import React, {FC} from 'react';
import {
  ViewProps,
  ScrollViewProps,
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TOKENS} from '../../Theme';

interface IPageContainerProps {
  type: 'SafeArea' | 'Default' | 'Scroll';
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

const PageContainer: FC<IPageContainerProps & (ViewProps | ScrollViewProps)> =
  ({type = 'Default', style, contentContainerStyle, children, ...props}) => {
    switch (type) {
      case 'SafeArea':
        return (
          <SafeAreaView style={[styles.view, style]} {...props}>
            {children}
          </SafeAreaView>
        );

      case 'Scroll':
        return (
          <ScrollView
            style={[style]}
            contentContainerStyle={[styles.scrollview, contentContainerStyle]}
            {...props}>
            {children}
          </ScrollView>
        );
      case 'Default':
      default:
        return (
          <View style={[styles.view, style]} {...props}>
            {children}
          </View>
        );
    }
  };

export default PageContainer;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingHorizontal: TOKENS.paddings.pageHorizontal,
  },
  scrollview: {
    flex: 1,
    paddingHorizontal: TOKENS.paddings.pageHorizontal,
  },
});

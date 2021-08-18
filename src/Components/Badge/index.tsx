import React, {FC} from 'react';
import {Platform, StyleSheet, useColorScheme, View} from 'react-native';
import {Text} from '..';
import {FONTS} from '../../Assets';
import {dark, light} from '../../Theme/Variants';

export interface IBadgeProps {
  /**
   *
   */
  size?: number;

  /**
   *
   */
  value: number | string;
}

const Badge: FC<IBadgeProps> = ({size = 20, value = 1}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const nSize = size < 20 ? 20 : size > 30 ? 30 : size;
  const nValue = typeof value === 'number' ? (value > 9 ? '9+' : value) : value;
  return (
    <View
      style={[
        styles.container,
        {
          height: Platform.OS === 'android' ? nSize : nSize + 6,
          width: Platform.OS === 'android' ? nSize : nSize + 6,
          borderRadius: Platform.OS === 'android' ? nSize / 2 : (nSize + 6) / 2,
          borderColor: isDarkMode ? dark.badge.border : light.badge.border,
          backgroundColor: isDarkMode
            ? dark.badge.background
            : light.badge.background,
          ...Platform.select({
            ios: {
              shadowColor: isDarkMode ? dark.badge.shadow : light.badge.shadow,
            },
          }),
        },
      ]}>
      <Text
        style={[
          styles.text,
          {
            fontSize: Number(((nSize / 3) * 2).toFixed(0)),
            color: isDarkMode ? dark.badge.text : light.badge.text,
          },
        ]}>
        {nValue}
      </Text>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        justifyContent: 'center',
      },
    }),
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  text: {
    textAlign: 'center',
    fontFamily: FONTS.bold,
  },
});

// TODO: Tekrar bak
// size small | medium | large | number olsun

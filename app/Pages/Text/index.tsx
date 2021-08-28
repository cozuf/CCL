import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {FONTS} from '../../../src/Assets';
import {PageContainer, TapSelector, Text} from '../../../src/Components';

const ACTIVE_DATA = [
  {
    title: 'Active',
    value: true,
  },
  {
    title: 'Passive',
    value: false,
  },
];

const TextPage = () => {
  const [active, setActive] = useState<boolean>(true);

  const onPress = () => {
    console.warn('onPress');
  };

  const onLongPress = () => {
    console.warn('onLongPress');
  };

  return (
    <PageContainer type="Scroll" bounces={false}>
      <View>
        <Text
          onPress={onPress}
          onLongPress={onLongPress}
          active={active}
          style={[styles.light, styles.common]}>
          {'Light'}
        </Text>
        <Text
          onPress={onPress}
          onLongPress={onLongPress}
          active={active}
          style={[styles.regular, styles.common]}>
          {'Regular'}
        </Text>
        <Text
          onPress={onPress}
          onLongPress={onLongPress}
          active={active}
          style={[styles.medium, styles.common]}>
          {'Medium'}
        </Text>
        <Text
          onPress={onPress}
          onLongPress={onLongPress}
          active={active}
          style={[styles.semibold, styles.common]}>
          {'SemiBold'}
        </Text>
        <Text
          onPress={onPress}
          onLongPress={onLongPress}
          active={active}
          style={[styles.bold, styles.common]}>
          {'Bold'}
        </Text>
      </View>
      <View style={{paddingVertical: 16}}>
        <TapSelector
          data={ACTIVE_DATA}
          onTap={() => {
            setActive(!active);
          }}
        />
      </View>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  default: {
    fontFamily: FONTS.default,
  },
  light: {
    fontFamily: FONTS.light,
  },
  regular: {
    fontFamily: FONTS.regular,
  },
  medium: {
    fontFamily: FONTS.medium,
  },
  semibold: {
    fontFamily: FONTS.semibold,
  },
  bold: {
    fontFamily: FONTS.bold,
  },
  common: {
    fontSize: 40,
    textAlign: 'center',
  },
});

export default TextPage;

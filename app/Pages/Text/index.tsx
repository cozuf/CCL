import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FONTS} from '../../../src/Assets';
import {PageContainer, Text} from '../../../src/Components';

const TextPage = () => {
  return (
    <PageContainer type="Scroll" bounces={false}>
      {/* <Text style={styles.default}>{'Default'}</Text> */}
      <Text style={[styles.light, styles.common]}>{'Light'}</Text>
      <Text style={[styles.regular, styles.common]}>{'Regular'}</Text>
      <Text style={[styles.medium, styles.common]}>{'Medium'}</Text>
      <Text style={[styles.semibold, styles.common]}>{'SemiBold'}</Text>
      <Text style={[styles.bold, styles.common]}>{'Bold'}</Text>
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

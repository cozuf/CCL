import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
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
          style={[styles.common]}
          weigth="Light">
          {'Light'}
        </Text>
        <Text
          onPress={onPress}
          onLongPress={onLongPress}
          active={active}
          style={[styles.common]}
          weigth="Regular">
          {'Regular'}
        </Text>
        <Text
          onPress={onPress}
          onLongPress={onLongPress}
          active={active}
          style={[styles.common]}
          weigth="Medium">
          {'Medium'}
        </Text>
        <Text
          onPress={onPress}
          onLongPress={onLongPress}
          active={active}
          style={[styles.common]}
          weigth="SemiBold">
          {'SemiBold'}
        </Text>
        <Text
          onPress={onPress}
          onLongPress={onLongPress}
          active={active}
          style={[styles.common]}
          weigth="Bold">
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
  common: {
    fontSize: 40,
    textAlign: 'center',
  },
});

export default TextPage;

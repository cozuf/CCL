import React from 'react';
import {FlatList, View} from 'react-native';
import {
  ActivityIndicator,
  IActivityIndicatorProps,
  PageContainer,
} from '../../../src/Components';
const INDICATORS: Partial<IActivityIndicatorProps>[] = [
  {
    type: 'BallIndicator',
  },
  {
    type: 'BarIndicator',
  },
  {
    type: 'DotIndicator',
  },
  {
    type: 'MaterialIndicator',
  },
  {
    type: 'PacmanIndicator',
  },
  {
    type: 'PulseIndicator',
  },
  {
    type: 'SkypeIndicator',
  },
  {
    type: 'UIActivityIndicator',
  },
  {
    type: 'WaveIndicator',
  },
  {
    type: 'Default',
  },
];
const ActivityIndicatorPage = () => {
  return (
    <PageContainer type={'Default'}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={INDICATORS}
        renderItem={({item, index}) => {
          return (
            <View style={{paddingVertical: 8, alignItems: 'center'}}>
              <ActivityIndicator type={item.type} />
            </View>
          );
        }}
      />
    </PageContainer>
  );
};

export default ActivityIndicatorPage;

import React, { useState } from 'react';
import { View } from 'react-native';
import { Badge, PageContainer, TapSelector } from '../../../src/Components';

const SIZES = [{ title: 'small' }, { title: 'medium' }, { title: 'large' }];
const VALUES = [{ title: 5 }, { title: 10 }];
const BadgePage = () => {
  const [sizeIndex, setSizeIndex] = useState<number>(0);
  const [valueIndex, setValueIndex] = useState<number>(0);
  return (
    <PageContainer type="Default">
      <View style={{ alignItems: "center" }}>
        <Badge size={SIZES[sizeIndex].title as "small" | "medium" | "large"} value={VALUES[valueIndex].title} />
      </View>
      <View style={{ paddingVertical: 16 }}>
        <TapSelector
          containerStyle={{ marginBottom: 8 }}
          data={SIZES}
          onTap={(item, index) => {
            setSizeIndex(index);
          }}
        />
        <TapSelector
          data={VALUES}
          onTap={(item, index) => {
            setValueIndex(index);
          }}
        />
      </View>
    </PageContainer>
  );
};

export default BadgePage;

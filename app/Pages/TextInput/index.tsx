import React, {useState} from 'react';
import {PageContainer, TextInput} from '../../../src/Components';

const TextInputPage = () => {
  const [value, setValue] = useState<string>('');
  return (
    <PageContainer type="Default">
      <TextInput value={value} onChangeText={setValue} cleanable={true} />
    </PageContainer>
  );
};

export default TextInputPage;

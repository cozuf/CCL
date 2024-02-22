import React, {useState} from 'react';
import {PageContainer, SearchBar} from '../../../src/Components';

const SearchBarPage = () => {
  const [searchText, setSearchText] = useState<string>('');
  return (
    <PageContainer type="Default">
      <SearchBar
        value={searchText}
        onSearch={setSearchText}
        placeholder={'Ara'}
      />
    </PageContainer>
  );
};

export default SearchBarPage;

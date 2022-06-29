import React from 'react';
import { setConstantValue } from 'typescript';
import { SearchFieldStyles } from '../../styles/search/SearchFieldStyles';

const SearchField = ({ value, setValue, onFocus }) => (
  <SearchFieldStyles>
    <input
      type="text"
      placeholder="search"
      value={value}
      onChange={(e) => setConstantValue(e.target.value)}
      onFocus={onFocus && onFocus}
    />
  </SearchFieldStyles>
);

export default SearchField;

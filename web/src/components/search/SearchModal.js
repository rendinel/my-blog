import React, { useContext, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { SearchModalContext } from '../../context/searchModalContext';
import { SearchModalStyles } from '../../styles/search/SearchModalStyles';
import ActionButton from '../buttons/ActionButton';
import SearchField from './SearchField ';

const Search = () => {
  const { isSearchModalOpen, closeSearchModal } =
    useContext(SearchModalContext);
  const [searchQuery, setSearchQuery] = useState('');

  const handleOnFocus = () => {
    console.log('focused');
  };
  if (!isSearchModalOpen) return null;
  return (
    <SearchModalStyles>
      <div className="modal__container">
        <ActionButton onClick={() => closeSearchModal()} className="close">
          <MdClose />
        </ActionButton>
        <SearchField
          onFocus={handleOnFocus}
          setValue={setSearchQuery}
          value={searchQuery}
        />
      </div>
    </SearchModalStyles>
  );
};

export default Search;

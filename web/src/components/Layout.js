import React from 'react';
import { SearchModalContextProvider } from '../context/searchModalContext';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from './Footer';
import Header from './Header';
import Search from './search/SearchModal';

const Layout = ({ children }) => (
  <SearchModalContextProvider>
    <GlobalStyles />
    <Search />
    <Header />
    {children}
    <Footer />
  </SearchModalContextProvider>
);

export default Layout;

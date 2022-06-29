import React, { useState, useContext } from 'react';
import { Link } from 'gatsby';
import { MdSearch, MdMenu, MdClose } from 'react-icons/md';
import clsx from 'clsx';
import HeaderStyles from '../styles/HeaderStyles';
import { menu } from '../constants/menu';
import Logo from './Logo';
import ActionButton from './buttons/ActionButton';
import { SearchModalContext } from '../context/searchModalContext';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { openSearchModal } = useContext(SearchModalContext);

  const handleSearchModalOpen = () => {
    openSearchModal();
  };
  const handleNavItemClick = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
    }
  };

  return (
    <HeaderStyles>
      <div className="container">
        <div className="header__container">
          <div className="logo">
            <Logo />
          </div>
          <div className={clsx('nav__wrapper', isNavOpen && 'open')}>
            <div className="mobileIcon">
              <div className="searchIcon">
                <div
                  onClick={handleSearchModalOpen}
                  onKeyDown={handleSearchModalOpen}
                  role="button"
                  tabIndex={0}
                  className="searchIcon__wrapper"
                >
                  <MdSearch />
                </div>
              </div>
              <ActionButton
                onKeyDown={() => setIsNavOpen(true)}
                onClick={() => setIsNavOpen(true)}
                className="mobileMenuBtn"
              >
                <MdMenu />
              </ActionButton>
            </div>
            {isNavOpen && (
              <div
                className="mobileNavBg"
                aria-label="close menu"
                role="button"
                tabIndex={0}
                onKeyDown={() => setIsNavOpen(false)}
                onClick={() => setIsNavOpen(false)}
              />
            )}
            <nav>
              <ActionButton
                onClick={() => setIsNavOpen(false)}
                onKeyDown={() => setIsNavOpen(false)}
                className="mobileMenuCloseBtn"
              >
                <MdClose />
              </ActionButton>
              <ul>
                {menu.map((item) => (
                  <li key={item.path}>
                    <Link onClick={handleNavItemClick} to={item.path}>
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li className="searchIcon">
                  <div
                    onClick={handleSearchModalOpen}
                    onKeyDown={handleSearchModalOpen}
                    className="searchIcon__wrapper"
                    role="button"
                    tabIndex={0}
                  >
                    <MdSearch />
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;

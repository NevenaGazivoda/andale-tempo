import React, { FC, useState } from 'react';
import { strings } from '../../constants/strings';
import AtpLink from '../link/AtpLink';
import './AtpNavbar.scss';
import { VscMenu, VscSearch } from 'react-icons/vsc';
import { BsBag } from 'react-icons/bs';
import AtpSearchBox from '../search-box/AtpSearchBox';

type Props = {
  totalItems: number;
};

export const AtpNavbar: FC<Props> = ({ totalItems }) => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <nav className="atp-navbar">
      <ul className="navbar-list navbar-list--desktop">
        <li className="navbar-list__link">
          <AtpLink to="/">{strings.MENSWEAR}</AtpLink>
        </li>
        <li className="navbar-list__link">
          <AtpLink to="/">{strings.WOMENSWEAR}</AtpLink>
        </li>
        <li className="navbar-list__link navbar-list__link--search" onClick={toggleSearch}>
          {strings.SEARCH}
        </li>
      </ul>
      {showSearch && <AtpSearchBox onClose={toggleSearch} />}

      <ul className="navbar-list navbar-list--mobile">
        <li className="navbar-list__link">
          <AtpLink to="/">
            <VscMenu className="navbar-list__link__mobile-icon" />
          </AtpLink>
        </li>
        <li className="navbar-list__link" onClick={toggleSearch}>
          <VscSearch className="navbar-list__link__mobile-icon" />
        </li>
      </ul>

      <p className="atp-navbar__title">{strings.BRAND_NAME}</p>

      <ul className="navbar-list navbar-list--right navbar-list--desktop">
        <li className="navbar-list__link">
          <AtpLink to="/">{strings.HOME}</AtpLink>
        </li>
        <li className="navbar-list__link--noPadding">
          <AtpLink to="/shopping-cart">
            {strings.SHOPPING_CART} ({totalItems})
          </AtpLink>
        </li>
      </ul>

      <ul className="navbar-list navbar-list--right navbar-list--mobile">
        <li className="navbar-list__link--noPadding">
          <AtpLink to="/shopping-cart" className="navbar-list__link--icon-link">
            <div className="navbar-list__link__icon-wrapper">
              <BsBag className="navbar-list__link__mobile-icon" />
              <span className="navbar-list__link__counter">{totalItems}</span>
            </div>
          </AtpLink>
        </li>
      </ul>
    </nav>
  );
};

export default AtpNavbar;

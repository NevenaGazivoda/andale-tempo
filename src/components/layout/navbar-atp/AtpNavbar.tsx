import React, { FC, useEffect, useRef, useState } from 'react';
import { strings } from '../../../constants/strings';
import AtpLink from '../../common/link-atp/AtpLink';
import './AtpNavbar.scss';
import { VscMenu, VscSearch } from 'react-icons/vsc';
import { BsBag } from 'react-icons/bs';
import AtpSearchBox from '../../search/search-box/AtpSearchBox';
import AtpMenuMobile from '../../menu-mobile/AtpMenuMobile';

type Props = {
  totalItems: number;
};

export const AtpNavbar: FC<Props> = ({ totalItems }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as HTMLElement)) {
        setShowSearch(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
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
      {showSearch && wrapperRef && <AtpSearchBox ref={wrapperRef} onClose={toggleSearch} />}

      <ul className="navbar-list navbar-list--mobile">
        <li className="navbar-list__link" onClick={toggleMenu}>
          <AtpLink to="/">
            <VscMenu className="navbar-list__link__mobile-icon" />
          </AtpLink>
        </li>
        <li className="navbar-list__link" onClick={toggleSearch}>
          <VscSearch className="navbar-list__link__mobile-icon" />
        </li>
      </ul>
      {showMenu && <AtpMenuMobile toggleMenu={toggleMenu} />}

      <AtpLink className="atp-navbar__title" to="/">
        {strings.BRAND_NAME}
      </AtpLink>
      {/* <p className="atp-navbar__title">{strings.BRAND_NAME}</p> */}

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

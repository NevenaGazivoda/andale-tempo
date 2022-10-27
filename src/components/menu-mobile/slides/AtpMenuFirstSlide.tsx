import React, { FC } from 'react';
import { VscChevronRight } from 'react-icons/vsc';
import { strings } from '../../../constants/strings';
import AtpLink from '../../link/AtpLink';
import './AtpMenuFirstSlide.scss';

type Props = {
  onSlideChange: (slideCount: number, title?: string) => void;
  slideCount: number;
  toggleMenu: () => void;
};

export const AtpMenuFirstSlide: FC<Props> = ({ toggleMenu, onSlideChange, slideCount }) => {
  const handleChangeSlide = (title: string) => {
    onSlideChange(slideCount + 1, title);
  };

  return (
    <>
      <li className="atp-menu-mobile__link" onClick={() => handleChangeSlide(strings.MENSWEAR)}>
        <AtpLink to="/">
          {strings.MENSWEAR}
          <VscChevronRight className="atp-menu-mobile__link__icon" />
        </AtpLink>
      </li>
      <li className="atp-menu-mobile__link" onClick={() => handleChangeSlide(strings.WOMENSWEAR)}>
        <AtpLink to="/">
          {strings.WOMENSWEAR}
          <VscChevronRight className="atp-menu-mobile__link__icon" />
        </AtpLink>
      </li>
      <li
        className="atp-menu-mobile__link"
        onClick={() => handleChangeSlide(strings.EVERYTHING_ELSE)}
      >
        <AtpLink to="/">
          {strings.EVERYTHING_ELSE}
          <VscChevronRight className="atp-menu-mobile__link__icon" />
        </AtpLink>
      </li>
      <li
        className="atp-menu-mobile__link atp-menu-mobile__link--capitalize atp-menu-mobile__link--top-margin"
        onClick={toggleMenu}
      >
        <AtpLink to="/shopping-cart">{strings.SHOPPING_CART}</AtpLink>
      </li>
      <li className="atp-menu-mobile__link atp-menu-mobile__link--capitalize">
        <AtpLink to="/">{strings.WISHLIST}</AtpLink>
      </li>
      <li className="atp-menu-mobile__link atp-menu-mobile__link--capitalize">
        <AtpLink to="/">{strings.LANGUAGE}</AtpLink>
      </li>
      <li className="atp-menu-mobile__link atp-menu-mobile__link--capitalize atp-menu-mobile__link--top-margin">
        <AtpLink to="/">
          {strings.CUSTOMER_CARE}
          <VscChevronRight className="atp-menu-mobile__link__icon" />
        </AtpLink>
      </li>
      <li className="atp-menu-mobile__link atp-menu-mobile__link--capitalize">
        <AtpLink to="/">{strings.LIVE_ASSISTANCE}</AtpLink>
      </li>
      <li className="atp-menu-mobile__link atp-menu-mobile__link--capitalize">
        <AtpLink to="/">
          {strings.LOCATIONS}
          <VscChevronRight className="atp-menu-mobile__link__icon" />
        </AtpLink>
      </li>
    </>
  );
};

export default AtpMenuFirstSlide;

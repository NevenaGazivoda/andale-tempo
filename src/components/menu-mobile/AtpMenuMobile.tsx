import React, { FC } from 'react';
import { VscChevronRight } from 'react-icons/vsc';
import { strings } from '../../constants/strings';
import AtpButton from '../button/AtpButton';
import AtpLink from '../link/AtpLink';
import './AtpMenuMobile.scss';

type Props = {
  toggleMenu: () => void;
};

export const AtpMenuMobile: FC<Props> = ({ toggleMenu }) => {
  return (
    <div className="atp-menu-mobile">
      <div className="atp-menu-mobile__header">
        <AtpButton isSecondary onClick={toggleMenu}>
          {strings.CLOSE}
        </AtpButton>
      </div>

      <ul className="atp-menu-mobile__list">
        <li className="atp-menu-mobile__list__link">
          <AtpLink to="/">
            {strings.MENSWEAR}
            <VscChevronRight className="atp-menu-mobile__list__link__icon" />
          </AtpLink>
        </li>
        <li className="atp-menu-mobile__list__link">
          <AtpLink to="/">
            {strings.WOMENSWEAR}
            <VscChevronRight className="atp-menu-mobile__list__link__icon" />
          </AtpLink>
        </li>
        <li className="atp-menu-mobile__list__link">
          <AtpLink to="/">
            {strings.EVERYTHING_ELSE}
            <VscChevronRight className="atp-menu-mobile__list__link__icon" />
          </AtpLink>
        </li>
        <li className="atp-menu-mobile__list__link atp-menu-mobile__list__link--capitalize atp-menu-mobile__list__link--top-margin">
          <AtpLink to="/">{strings.SHOPPING_CART}</AtpLink>
        </li>
        <li className="atp-menu-mobile__list__link atp-menu-mobile__list__link--capitalize">
          <AtpLink to="/">{strings.WISHLIST}</AtpLink>
        </li>
        <li className="atp-menu-mobile__list__link atp-menu-mobile__list__link--capitalize">
          <AtpLink to="/">{strings.LANGUAGE}</AtpLink>
        </li>
        <li className="atp-menu-mobile__list__link atp-menu-mobile__list__link--capitalize atp-menu-mobile__list__link--top-margin">
          <AtpLink to="/">
            {strings.CUSTOMER_CARE}
            <VscChevronRight className="atp-menu-mobile__list__link__icon" />
          </AtpLink>
        </li>
        <li className="atp-menu-mobile__list__link atp-menu-mobile__list__link--capitalize">
          <AtpLink to="/">{strings.LIVE_ASSISTANCE}</AtpLink>
        </li>
        <li className="atp-menu-mobile__list__link atp-menu-mobile__list__link--capitalize">
          <AtpLink to="/">
            {strings.LOCATIONS}
            <VscChevronRight className="atp-menu-mobile__list__link__icon" />
          </AtpLink>
        </li>
      </ul>
    </div>
  );
};

export default AtpMenuMobile;

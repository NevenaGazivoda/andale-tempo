import React from 'react';
import './AtpSearchBox.scss';
import { strings } from '../../constants/strings';
import AtpButton from '../button/AtpButton';
import AtpLink from '../link/AtpLink';

export const AtpSearchBox = () => {
  return (
    <div className="atp-search-box">
      <ul className="atp-search-box__list">
        <li className="atp-search-box__list__link">
          <AtpLink to="/">{strings.MENSWEAR}</AtpLink>
        </li>
        <li className="atp-search-box__list__link">
          <AtpLink to="/">{strings.WOMENSWEAR}</AtpLink>
        </li>
        <li className="atp-search-box__list__link">
          <AtpLink to="/">{strings.EVERYTHING_ELSE}</AtpLink>
        </li>
      </ul>
      <div className="atp-search-box__input-container">
        <input type="text" className="atp-input atp-search-box__input-container__input" />
        <AtpButton isSecondary className="atp-search__input-box-container__button">
          {strings.CLOSE}
        </AtpButton>
      </div>
    </div>
  );
};

export default AtpSearchBox;

import React, { FC } from 'react';
import { strings } from '../../constants/strings';
import AtpButton from '../button/AtpButton';
import AtpLink from '../link/AtpLink';
import AtpText from '../text/AtpText';
import './AtpSearchSort.scss';
import { HiOutlineMinus } from 'react-icons/hi';

type Props = {
  toggleSort: () => void;
};

export const AtpSearchSort: FC<Props> = ({ toggleSort }) => {
  return (
    <>
      <div className="atp-search-sort-mobile">
        <div className="atp-search-sort-mobile__header">
          <AtpButton isSecondary onClick={toggleSort}>
            Cancel
          </AtpButton>
          <div className="atp-search-sort-mobile__header__sort">{strings.SORT}</div>
        </div>
        <div className="atp-search-sort-mobile__menu-item">
          <HiOutlineMinus className="atp-search-sort-mobile__menu-item__icon" />
          {strings.RELEVANCE}
        </div>
        <div className="atp-search-sort-mobile__menu-item">
          <HiOutlineMinus className="atp-search-sort-mobile__menu-item__icon" />
          {strings.LATEST_ARRIVALS}
        </div>
        <div className="atp-search-sort-mobile__menu-item">
          <HiOutlineMinus className="atp-search-sort-mobile__menu-item__icon" />
          {strings.TRENDING}
        </div>
        <div className="atp-search-sort-mobile__menu-item">
          <HiOutlineMinus className="atp-search-sort-mobile__menu-item__icon" />

          {strings.PRICE + ' ' + strings.LOW_TO_HIGH}
        </div>
        <div className="atp-search-sort-mobile__menu-item">
          <HiOutlineMinus className="atp-search-sort-mobile__menu-item__icon" />

          {strings.PRICE + ' ' + strings.HIGH_TO_LOW}
        </div>
      </div>

      <div className="atp-search-sort-desktop">
        <AtpText className="atp-search-sort-desktop__title">{strings.SORT}</AtpText>

        <AtpLink className="atp-search-sort-desktop__link" to={''}>
          {strings.LATEST_ARRIVALS}
        </AtpLink>
        <AtpLink className="atp-search-sort-desktop__link" to={''}>
          {strings.TRENDING}
        </AtpLink>
        <AtpLink className="atp-search-sort-desktop__link" to={''}>
          {strings.PRICE + ' ' + strings.LOW_TO_HIGH}
        </AtpLink>
        <AtpLink className="atp-search-sort-desktop__link" to={''}>
          {strings.PRICE + ' ' + strings.HIGH_TO_LOW}
        </AtpLink>
      </div>
    </>
  );
};

export default AtpSearchSort;

import React, { FC } from 'react';
import { strings } from '../../constants/strings';
import AtpButton from '../button/AtpButton';
import AtpText from '../text/AtpText';
import './AtpSearchSort.scss';
import { HiOutlineMinus } from 'react-icons/hi';

type Props = {
  toggleSort: () => void;
  sortingResults: (sort: string) => void;
};

export const AtpSearchSort: FC<Props> = ({ sortingResults, toggleSort }) => {
  const handleClick = (sortOrder: string) => {
    sortingResults(sortOrder);
    toggleSort();
  };

  return (
    <>
      <div className="atp-search-sort-mobile">
        <div className="atp-search-sort-mobile__header">
          <AtpButton isSecondary onClick={toggleSort}>
            {strings.CANCEL}
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
        <div
          className="atp-search-sort-mobile__menu-item"
          onClick={() => handleClick('low to high')}
        >
          <HiOutlineMinus className="atp-search-sort-mobile__menu-item__icon" />
          {strings.PRICE + ' ' + strings.LOW_TO_HIGH}
        </div>
        <div
          className="atp-search-sort-mobile__menu-item"
          onClick={() => handleClick('high to low')}
        >
          <HiOutlineMinus className="atp-search-sort-mobile__menu-item__icon" />
          {strings.PRICE + ' ' + strings.HIGH_TO_LOW}
        </div>
      </div>

      <div className="atp-search-sort-desktop">
        <AtpText className="atp-search-sort-desktop__title">{strings.SORT}</AtpText>

        <div className="atp-search-sort-desktop__link">{strings.LATEST_ARRIVALS}</div>
        <div className="atp-search-sort-desktop__link">{strings.TRENDING}</div>
        <div className="atp-search-sort-desktop__link" onClick={() => handleClick('low to high')}>
          {strings.PRICE + ' ' + strings.LOW_TO_HIGH}
        </div>
        <div className="atp-search-sort-desktop__link" onClick={() => handleClick('high to low')}>
          {strings.PRICE + ' ' + strings.HIGH_TO_LOW}
        </div>
      </div>
    </>
  );
};

export default AtpSearchSort;

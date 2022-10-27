import React, { FC, useState } from 'react';
import { strings } from '../../constants/strings';
import AtpButton from '../button/AtpButton';
import AtpText from '../text/AtpText';
import './AtpSearchSort.scss';
import { HiOutlineMinus } from 'react-icons/hi';
import { sortOptions } from '../../assets/dummy-data/searchData';

type SortItemProps = {
  text: string;
  value: string;
  onClick: (sortOptionValue: string) => void;
  selected?: boolean;
};

const SearchSortItem: FC<SortItemProps> = ({ text, value, onClick, selected }) => (
  <div className="atp-search-sort-mobile__menu-item" onClick={() => onClick(value)}>
    {selected ? (
      <HiOutlineMinus className="atp-search-sort-mobile__menu-item__icon" />
    ) : (
      <span className="atp-search-sort-mobile__menu-item__icon"></span>
    )}
    {text}
  </div>
);

type Props = {
  selectedSort: string;
  toggleSort: () => void;
  onChangeSortOrder: (sort: string) => void;
};

export const AtpSearchSort: FC<Props> = ({ selectedSort, onChangeSortOrder, toggleSort }) => {
  const handleClick = (sortOrder: string) => {
    onChangeSortOrder(sortOrder);
    toggleSort();
  };

  return (
    <>
      <div className="atp-search-sort-mobile">
        <div className="atp-search-sort-mobile__header">
          <AtpButton
            isSecondary
            onClick={toggleSort}
            className="atp-search-sort-mobile__header__button"
          >
            {strings.CANCEL}
          </AtpButton>
          <div className="atp-search-sort-mobile__header__sort">{strings.SORT}</div>
        </div>
        {sortOptions.map((sortOption) => (
          <SearchSortItem
            key={'sort-option-item-' + sortOption.id}
            {...sortOption}
            onClick={handleClick}
            selected={sortOption.value === selectedSort}
          />
        ))}
      </div>
    </>
  );
};

export default AtpSearchSort;

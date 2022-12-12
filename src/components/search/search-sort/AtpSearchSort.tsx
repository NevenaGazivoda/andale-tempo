import { sortOptions } from 'assets/dummy-data/searchData';
import AtpButton from 'components/common/button/AtpButton';
import { strings } from 'constants/strings';
import React, { FC } from 'react';
import { HiOutlineMinus } from 'react-icons/hi';
import './AtpSearchSort.scss';

type SortItemProps = {
  text: string;
  value: string;
  onClick: (sortOptionValue: string) => void;
  selected?: boolean;
};

const AtpSearchSortItem: FC<SortItemProps> = ({ text, value, onClick, selected }) => (
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
          <span className="atp-search-sort-mobile__header__button"></span>
        </div>
        {sortOptions.map((sortOption) => (
          <AtpSearchSortItem
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

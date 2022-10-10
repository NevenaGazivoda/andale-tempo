import React, { FC, useState } from 'react';
import AtpLink from '../link/AtpLink';
import { strings } from '../../constants/strings';
import './AtpSearchFilters.scss';
import AtpButton from '../button/AtpButton';
import { brands, categories } from '../../assets/dummy-data/searchData';

type Props = {
  toggleFilters: () => void;
};

export const AtpSearchFilters: FC<Props> = ({ toggleFilters }) => {
  const [isCategorySelected, setCategorySelected] = useState(false);
  const [isBrandSelected, setBrandSelected] = useState(false);

  const [filters, setFilters] = useState<string[]>([]);

  const selectBrand = () => {
    setBrandSelected(!isBrandSelected);
    setCategorySelected(false);
  };

  const selectCategory = () => {
    setCategorySelected(!isCategorySelected);
    setBrandSelected(false);
  };

  const addFilter = (selectedFilter: string) => {
    if (!filters.includes(selectedFilter)) {
      setFilters([...filters, selectedFilter]);
    }
  };

  const removeFilter = (selectedFilter: string) => {
    setFilters(filters.filter((filter) => filter !== selectedFilter));
  };

  const removeAllFilters = () => {
    setFilters([]);
  };

  return (
    <>
      <div className="atp-search-filters-mobile">
        <div className="atp-search-filters-mobile__header">
          <AtpButton
            className="atp-search-filters-mobile__header__button"
            isSecondary
            onClick={toggleFilters}
          >
            {strings.CANCEL}
          </AtpButton>
          <div className="atp-search-filters-mobile__header__refine">{strings.REFINE}</div>
        </div>
        <div className="atp-search-filters-mobile__header">
          <AtpButton
            onClick={removeAllFilters}
            className="atp-search-filters-mobile__header__button"
            isSecondary
          >
            {strings.CLEAR}
          </AtpButton>
          {filters &&
            filters.map((filter) => (
              <AtpButton isFilterButton onClick={() => removeFilter(filter)} key={filter}>
                {filter} <span className="atp-search-filters-mobile__header__remove-filter">X</span>
              </AtpButton>
            ))}
        </div>
        <ul className="atp-search-filters-mobile__list">
          <li className="atp-search-filters-mobile__list__link" onClick={selectBrand}>
            {strings.DESIGNERS}
          </li>
          <li className="atp-search-filters-mobile__list__link" onClick={selectCategory}>
            {strings.CATEGORIES}
          </li>
          <li className="atp-search-filters-mobile__list__link">{strings.COLORS}</li>
          <li className="atp-search-filters-mobile__list__link">{strings.SIZES}</li>
        </ul>
        {isBrandSelected && (
          <div className="atp-search-filters-mobile__categories">
            {brands.map((brand: string) => (
              <div
                onClick={() => addFilter(brand)}
                className="atp-search-filters-mobile__categories__text"
                key={brand}
              >
                {brand}
              </div>
            ))}
          </div>
        )}
        {isCategorySelected && (
          <div className="atp-search-filters-mobile__categories">
            {categories.map((category: string) => (
              <div
                onClick={() => addFilter(category)}
                className="atp-search-filters-mobile__categories__text"
                key={category}
              >
                {category}
              </div>
            ))}
          </div>
        )}
        <div className="atp-search-filters-mobile__apply">
          <AtpButton>{strings.APPLY_FILTERS + ' (' + filters.length + ')'}</AtpButton>
        </div>
      </div>

      <div className="atp-search-filters-desktop">
        <div className="atp-search-filters-desktop__title">
          <AtpLink to={''}>{strings.ALL + ' ' + strings.CATEGORIES}</AtpLink>
        </div>
        {categories.map((category: string) => (
          <AtpLink className="atp-search-filters-desktop__link" key={category} to={''}>
            {category}
          </AtpLink>
        ))}
        <div className="atp-search-filters-desktop__title">
          <AtpLink to={''}>{strings.ALL + ' ' + strings.DESIGNERS}</AtpLink>
        </div>
        {brands.map((brand: string) => (
          <AtpLink className="atp-search-filters-desktop__link" key={brand} to={`/search/${brand}`}>
            {brand}
          </AtpLink>
        ))}
      </div>
    </>
  );
};

export default AtpSearchFilters;

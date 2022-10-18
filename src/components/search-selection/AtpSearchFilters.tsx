import React, { FC, useState } from 'react';
import AtpLink from '../link/AtpLink';
import { strings } from '../../constants/strings';
import './AtpSearchFilters.scss';
import AtpButton from '../button/AtpButton';
import { brands, categories_data } from '../../assets/dummy-data/searchData';
import { useNavigate } from 'react-router-dom';
import AtpSearchCategories from '../search-categories/AtpSearchCategories';

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

  const removeFilter = (categoryIndex: number) => {
    setFilters((oldItems) => oldItems.filter((item, index) => index !== categoryIndex));
  };

  const removeAllFilters = () => {
    setFilters([]);
  };

  const navigate = useNavigate();

  const applyFilter = () => {
    navigate(`/search/${filters[0]}`);
    toggleFilters();
  };

  const onFilterChange = (categoryName: string, parentName?: string) => {
    if (parentName && filters.includes(parentName)) {
      const parentIndex = filters.indexOf(parentName);

      filters.splice(parentIndex, 1);
      setFilters(filters);
    }
    addFilter(categoryName);
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
            filters.map((filter, filterIndex) => (
              <AtpButton isFilterButton onClick={() => removeFilter(filterIndex)} key={filter}>
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
          <AtpSearchCategories
            depthLevel={0}
            categories={categories_data}
            onFilterChange={onFilterChange}
          />
        )}
        <div className="atp-search-filters-mobile__apply">
          <AtpButton onClick={applyFilter}>
            {strings.APPLY_FILTERS + ' (' + filters.length + ')'}
          </AtpButton>
        </div>
      </div>

      <div className="atp-search-filters-desktop">
        <div className="atp-search-filters-desktop__title atp-search-filters-desktop__link">
          {strings.ALL + ' ' + strings.CATEGORIES}
        </div>
        <AtpSearchCategories
          depthLevel={0}
          categories={categories_data}
          onFilterChange={onFilterChange}
        />
        <div className="atp-search-filters-desktop__title atp-search-filters-desktop__link">
          {strings.ALL + ' ' + strings.DESIGNERS}
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

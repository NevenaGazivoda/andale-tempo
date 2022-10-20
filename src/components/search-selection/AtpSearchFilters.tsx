import React, { FC, useState } from 'react';
import { strings } from '../../constants/strings';
import './AtpSearchFilters.scss';
import AtpButton from '../button/AtpButton';
import { brandsData, categoriesData } from '../../assets/dummy-data/searchData';
import { useNavigate } from 'react-router-dom';
import AtpSearchCategories from '../search-categories/AtpSearchCategories';
import AtpSearchTabs from '../search-tabs/AtpSearchTabs';
import AtpSearchBrands from '../search-brands/AtpSearchBrands';
import { Filter } from '../../models/filter.model';

type Props = {
  toggleFilters: () => void;
};

export const AtpSearchFilters: FC<Props> = ({ toggleFilters }) => {
  const navigate = useNavigate();

  const [filters, setFilters] = useState<Filter[]>([]);

  const addFilter = (selectedFilter: Filter) => {
    // console.log('addFilter', filters);
    if (!filters.includes(selectedFilter)) {
      setFilters((oldFilters) => [...oldFilters, selectedFilter]);
    }
    // console.log(filters, 'after adding');
  };

  const removeFilter = (selectedFilter: Filter) => {
    setFilters((oldItems) => oldItems.filter((item) => item.label !== selectedFilter.label));
  };

  const removeAllFilters = () => {
    setFilters([]);
  };

  const applyFilter = () => {
    navigate(`/search/${filters[0]}`);
    toggleFilters();
  };

  const onFilterChange = (selectedFilter: Filter, parent?: Filter) => {
    if (parent) {
      setFilters((current) =>
        current.map((filter) => {
          if (parent === filter) {
            return { ...filter, isHidden: true };
          }
          return filter;
        })
      );

      // if (!filters.includes(categoryName)) {
      //   setFilters((oldFilters) => [
      //     ...oldFilters.filter((item) => item !== parentName),
      //     categoryName,
      //   ]);
      // }
    }

    const filterInArray = filters.find((filter) => filter.label === selectedFilter.label);

    if (!filterInArray) {
      addFilter(selectedFilter);
    } else {
      removeFilter(selectedFilter);
    }
    console.log(filterInArray);

    // if (!filters.includes(selectedFilter)) {
    //   addFilter(selectedFilter);
    // }
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
            filters
              .filter((filter) => filter.isHidden !== true)
              .map((filter) => (
                <AtpButton isFilterButton onClick={() => removeFilter(filter)} key={filter.label}>
                  {filter.label}
                  <span className="atp-search-filters-mobile__header__remove-filter">X</span>
                </AtpButton>
              ))}
        </div>

        <AtpSearchTabs
          filters={filters}
          brands={brandsData}
          categories={categoriesData}
          onFilterChange={onFilterChange}
        />

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
          categories={categoriesData}
          onFilterChange={onFilterChange}
          filters={filters}
          depthLevel={0}
        />
        <div className="atp-search-filters-desktop__title atp-search-filters-desktop__link">
          {strings.ALL + ' ' + strings.DESIGNERS}
        </div>
        <AtpSearchBrands filters={filters} brands={brandsData} onFilterChange={onFilterChange} />
      </div>
    </>
  );
};

export default AtpSearchFilters;

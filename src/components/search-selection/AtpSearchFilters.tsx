import React, { FC, useState } from 'react';
import { strings } from '../../constants/strings';
import './AtpSearchFilters.scss';
import AtpButton from '../button/AtpButton';
import { brandsData, categoriesData, colorsData } from '../../assets/dummy-data/searchData';
import { createSearchParams, useNavigate } from 'react-router-dom';
import AtpSearchCategories from '../search-categories/AtpSearchCategories';
import AtpSearchTabs from '../search-tabs/AtpSearchTabs';
import AtpSearchBrands from '../search-brands/AtpSearchBrands';
import { Filter } from '../../models/filter.model';
import AtpTabPane from '../search-tabs/AtpTabPane';
import AtpSearchColors from '../search-colors/AtpSearchColors';

type Props = {
  toggleFilters: () => void;
};

export const AtpSearchFilters: FC<Props> = ({ toggleFilters }) => {
  const navigate = useNavigate();

  const [filters, setFilters] = useState<Filter[]>([]);

  const addFilter = (selectedFilter: Filter) => {
    if (!filters.includes(selectedFilter)) {
      setFilters((oldFilters) => [...oldFilters, selectedFilter]);
    }
  };

  const removeFilter = (selectedFilter: Filter) => {
    setFilters((oldItems) => [...oldItems.filter((item) => item.label !== selectedFilter.label)]);
  };

  const removeAllFilters = () => {
    setFilters([]);
  };

  const filtersString = filters.map((element) => element.label.toLowerCase());

  const params = {
    term: filtersString,
  };

  const applyFilter = () => {
    navigate({
      pathname: '/search',
      search: `?${createSearchParams(params)}`,
    });
    toggleFilters();
  };

  const onFilterChange = (selectedFilter: Filter, parent?: Filter) => {
    if (parent) {
      setFilters((current) =>
        current.map((filter) => {
          if (parent.label === filter.label) {
            return { ...filter, isHidden: true };
          }
          return filter;
        })
      );
    }

    const filterInArray = filters.find(
      (filter) => filter.id === selectedFilter.id && filter.label === selectedFilter.label
    );

    if (!filterInArray) {
      addFilter(selectedFilter);
    } else {
      for (const item of selectedFilter.children) {
        removeFilter(item);
        if (item.children) {
          item.children.forEach((element) => {
            removeFilter(element);
          });
        }
      }
      if (parent) {
        setFilters((current) =>
          current.map((filter) => {
            if (parent.label === filter.label) {
              const commonNumbers = current.filter((i) => filter.children.includes(i));

              if (commonNumbers.length > 1) {
                return { ...filter, isHidden: true };
              } else {
                return { ...filter, isHidden: false };
              }
            }
            return filter;
          })
        );
      }
      removeFilter(selectedFilter);
    }

    if (!filterInArray?.children) {
      setFilters((current) =>
        current.map((filter) => {
          if (filter.children == []) {
            return { ...filter, isHidden: false };
          }
          return filter;
        })
      );
    }
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
          <span className="atp-search-filters-mobile__header__button"></span>
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

        <AtpSearchTabs>
          <AtpTabPane title={strings.DESIGNERS}>
            <AtpSearchBrands
              brands={brandsData}
              onFilterChange={onFilterChange}
              filters={filters}
            />
          </AtpTabPane>
          <AtpTabPane title={strings.CATEGORIES}>
            <AtpSearchCategories
              categories={categoriesData}
              onFilterChange={onFilterChange}
              filters={filters}
              depthLevel={0}
              isMenuItem={false}
            />
          </AtpTabPane>
          <AtpTabPane title={strings.COLORS}>
            <AtpSearchColors
              colors={colorsData}
              onFilterChange={onFilterChange}
              filters={filters}
            />
          </AtpTabPane>
          <AtpTabPane title={strings.SIZES}>{}</AtpTabPane>
        </AtpSearchTabs>

        <div className="atp-search-filters-mobile__apply">
          <AtpButton onClick={applyFilter}>
            {strings.APPLY_FILTERS +
              ' (' +
              filters.filter((filter) => filter.isHidden !== true).length +
              ')'}
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
          isMenuItem={false}
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

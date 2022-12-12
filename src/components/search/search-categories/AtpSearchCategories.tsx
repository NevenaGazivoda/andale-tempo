import React, { FC } from 'react';
import { Category } from 'models/category.model';
import './AtpSearchCategories.scss';
import { HiOutlineMinus } from 'react-icons/hi';
import AtpText from 'components/common/text/AtpText';
import classNames from 'classnames';
import { categoriesData } from 'assets/dummy-data/searchData';
import { Filter } from 'models/filter.model';
import { VscChevronRight } from 'react-icons/vsc';

type Props = {
  categories: Category[];
  onFilterChange?: (category: Filter, parent?: Filter) => void;
  filters?: Filter[];
  depthLevel: number;
  isMenuItem: boolean;
};

export const AtpSearchCategories: FC<Props> = ({
  categories,
  onFilterChange,
  filters,
  depthLevel,
  isMenuItem,
}) => {
  const clickHandler = (category: Filter) => {
    if (depthLevel > 0) {
      const parent = findParent(categoriesData, category.id);
      onFilterChange ? onFilterChange(category, parent) : null;
    } else {
      onFilterChange ? onFilterChange(category) : null;
    }
  };

  const findParent: any = (_categories: Category[], id: number, parent = null) => {
    for (const item of _categories) {
      const result: Category =
        item.id === id ? parent : item.children.length > 0 && findParent(item.children, id, item);
      if (result) return result;
    }
  };

  return (
    <div className="atp-search-categories">
      {categories.map((category) => (
        <div
          key={category.label}
          className={classNames(
            'atp-search-categories__text',
            depthLevel > 0 && 'atp-search-categories__text__child'
          )}
        >
          <div onClick={() => clickHandler(category)}>
            {filters && filters.find((filter) => filter.label === category.label) && (
              <HiOutlineMinus className="atp-search-categories__icon" />
            )}
            <AtpText className="atp-search-categories__text__label">{category.label}</AtpText>
            {isMenuItem && <VscChevronRight className="atp-menu-mobile-slide__icon" />}
          </div>
          {filters &&
            filters.find((filter) => filter.label === category.label) &&
            category.children.length > 0 && (
              <AtpSearchCategories
                categories={category.children}
                onFilterChange={onFilterChange}
                filters={filters}
                depthLevel={0 + 1}
                isMenuItem={false}
              />
            )}
        </div>
      ))}
    </div>
  );
};

export default AtpSearchCategories;

import classNames from 'classnames';
import React, { FC, useState } from 'react';
import { strings } from '../../constants/strings';
import { Category } from '../../models/category.model';
import { Filter } from '../../models/filter.model';
import AtpSearchBrands from '../search-brands/AtpSearchBrands';
import AtpSearchCategories from '../search-categories/AtpSearchCategories';
import './AtpSearchTabs.scss';

type Props = {
  brands: Filter[];
  categories: Category[];
  onFilterChange: (category: Filter, parent?: Filter) => void;
  filters: Filter[];
};

export const AtpSearchTabs: FC<Props> = ({ brands, categories, onFilterChange, filters }) => {
  const [activeTab, setActiveTab] = useState('tab1');

  const selectBrand = () => {
    // update the state to tab1
    setActiveTab('tab1');
  };
  const selectCategory = () => {
    // update the state to tab2
    setActiveTab('tab2');
  };

  return (
    <div className="Tabs">
      <ul className="atp-search-tabs">
        <li className={classNames('atp-search-tabs__link')} onClick={selectBrand}>
          {strings.DESIGNERS}
        </li>
        <li className={classNames('atp-search-tabs__link')} onClick={selectCategory}>
          {strings.CATEGORIES}
        </li>
        <li className="atp-search-tabs__link">{strings.COLORS}</li>
        <li className="atp-search-tabs__link">{strings.SIZES}</li>
      </ul>

      <div className="outlet">
        {activeTab === 'tab1' ? (
          <AtpSearchBrands brands={brands} onFilterChange={onFilterChange} filters={filters} />
        ) : (
          <AtpSearchCategories
            categories={categories}
            onFilterChange={onFilterChange}
            filters={filters}
            depthLevel={0}
          />
        )}
      </div>
    </div>
  );
};

export default AtpSearchTabs;

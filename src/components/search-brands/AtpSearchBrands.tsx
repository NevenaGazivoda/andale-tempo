import React, { FC } from 'react';
import './AtpSearchBrands.scss';
import { Filter } from '../../models/filter.model';

type Props = {
  filters: Filter[];
  brands: Filter[];
  onFilterChange: (category: Filter, parent?: Filter) => void;
};

export const AtpSearchBrands: FC<Props> = ({ brands, onFilterChange, filters }) => {
  return (
    <div className="atp-search-brands">
      {brands.map((brand) => (
        <div
          className="atp-search-brands__label"
          key={brand.id}
          onClick={() => onFilterChange(brand)}
        >
          {brand.label}
        </div>
      ))}
    </div>
  );
};

export default AtpSearchBrands;

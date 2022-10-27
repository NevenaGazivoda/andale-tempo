import React, { FC } from 'react';
import './AtpSearchBrands.scss';
import { Filter } from '../../models/filter.model';
import { useNavigate } from 'react-router-dom';

type Props = {
  filters?: Filter[];
  brands: Filter[];
  onFilterChange?: (category: Filter, parent?: Filter) => void;
  onCloseMenu?: () => void;
};

export const AtpSearchBrands: FC<Props> = ({ brands, onFilterChange, onCloseMenu }) => {
  const navigate = useNavigate();

  const handleClick = (brand: Filter) => {
    onFilterChange ? onFilterChange(brand) : null;
    navigate(`/search?term=${brand.label.toLowerCase()}`);
    onCloseMenu ? onCloseMenu() : null;
  };

  return (
    <div className="atp-search-brands">
      {brands.map((brand) => (
        <div className="atp-search-brands__label" key={brand.id} onClick={() => handleClick(brand)}>
          {brand.label}
        </div>
      ))}
    </div>
  );
};

export default AtpSearchBrands;

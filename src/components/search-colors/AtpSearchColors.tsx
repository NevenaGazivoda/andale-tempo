import React, { FC } from 'react';
import './AtpSearchColors.scss';
import { Filter } from '../../models/filter.model';

type Props = {
  filters?: Filter[];
  colors: Filter[];
  onFilterChange?: (category: Filter, parent?: Filter) => void;
  onCloseMenu?: () => void;
};

export const AtpSearchColors: FC<Props> = ({ colors, onFilterChange, onCloseMenu }) => {
  const handleClick = (color: Filter) => {
    onFilterChange ? onFilterChange(color) : null;
    onCloseMenu ? onCloseMenu() : null;
  };

  return (
    <div className="atp-search-colors">
      {colors.map((color) => (
        <div className="atp-search-colors__label" key={color.id} onClick={() => handleClick(color)}>
          {color.label}
        </div>
      ))}
    </div>
  );
};

export default AtpSearchColors;

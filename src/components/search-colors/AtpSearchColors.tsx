import React, { FC } from 'react';
import './AtpSearchColors.scss';
import { Filter } from '../../models/filter.model';
import { useNavigate } from 'react-router-dom';

type Props = {
  filters?: Filter[];
  colors: Filter[];
  onFilterChange?: (category: Filter, parent?: Filter) => void;
  onCloseMenu?: () => void;
};

export const AtpSearchColors: FC<Props> = ({ colors, onFilterChange, onCloseMenu }) => {
  const navigate = useNavigate();

  const handleClick = (color: Filter) => {
    onFilterChange ? onFilterChange(color) : null;
    navigate(`/search?term=${color.label.toLowerCase()}`);
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

import React, { FC, MouseEventHandler, SelectHTMLAttributes, useState } from 'react';
import { Category } from '../../models/category.model';
import './AtpSearchCategories.scss';
import { HiOutlineMinus } from 'react-icons/hi';
import { categories_data } from '../../assets/dummy-data/searchData';
import AtpText from '../text/AtpText';
import classNames from 'classnames';

type Props = {
  categories: Category[];
  onFilterChange: (categoryName: string, parentName?: string) => void;
  depthLevel: number;
};

export const AtpSearchCategories: FC<Props> = ({ categories, onFilterChange, depthLevel }) => {
  const [categoryId, setCategoryId] = useState('');
  const [selected, setSelected] = useState(false);

  const clickHandler = (id: string, categoryName: string) => {
    if (categoryId === id && selected) {
      setSelected(!selected);
    } else {
      if (!selected) {
        setSelected(!selected);
      }
    }
    onFilterChange(categoryName);
    setCategoryId(id);
    if (depthLevel > 0) {
      const parentName = findParent(categories_data, id).label;
      onFilterChange(categoryName, parentName);
    }
  };
  const findParent: any = (categories: Category[], id: string, parent = null) => {
    for (const item of categories) {
      const result: Category =
        item.id === id ? parent : item.children && findParent(item.children, id, item);
      if (result) return result;
    }
  };

  return (
    <div className="atp-search-categories">
      {categories.map((category) => (
        <div
          key={category.name}
          className={classNames(
            'atp-search-categories__text',
            `${depthLevel == 0 && 'atp-search-categories__text--no-margin'}`
          )}
        >
          <div onClick={() => clickHandler(category.id, category.label)}>
            {selected && categoryId === category.id && (
              <HiOutlineMinus className="atp-search-categories__icon" />
            )}
            <AtpText className="atp-search-categories__text__label">{category.label}</AtpText>
          </div>
          {selected && category.children.length > 0 && categoryId === category.id && (
            <AtpSearchCategories
              categories={category.children}
              onFilterChange={onFilterChange}
              depthLevel={depthLevel + 1}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default AtpSearchCategories;

import React, { FC, useState } from 'react';
import './AtpMenuCategories.scss';
import { VscChevronRight } from 'react-icons/vsc';
import { Category } from '../../../models/category.model';
import AtpText from '../../text/AtpText';
import classNames from 'classnames';
type ItemsProps = {
  categories: Category[];
  depthLevel: number;
};

const AtpMenuCategoriesItems: FC<ItemsProps> = ({ categories }) => {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.label}>{category.label}</li>
      ))}
    </ul>
  );
};

type Props = {
  categories: Category[];
  depthLevel: number;
};
export const AtpMenuCategories: FC<Props> = ({ categories, depthLevel }) => {
  const [isChildren, setChildren] = useState(false);

  const clickHandler = (category: Category) => {
    depthLevel + 1;
    setChildren(true);
  };
  return (
    <div
      className={classNames('atp-menu-categories', depthLevel > 0 && 'atp-menu-categories__child')}
    >
      {categories.map((category) => (
        <div
          key={category.label}
          className={classNames(
            'atp-menu-categories__text',
            depthLevel > 0 && 'atp-menu-categories__text__child'
          )}
        >
          <div onClick={() => clickHandler(category)}>
            <AtpText className="atp-menu-categories__text__label">{category.label}</AtpText>
            <VscChevronRight className="atp-menu-mobile-slide__icon" />
          </div>
          {category.children.length > 0 && isChildren && (
            <AtpMenuCategoriesItems categories={category.children} depthLevel={0 + 1} />
          )}
        </div>
      ))}
    </div>
  );
};

export default AtpMenuCategories;

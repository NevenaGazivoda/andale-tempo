import classNames from 'classnames';
import React, { FC } from 'react';
import { VscChevronRight } from 'react-icons/vsc';
import { menuOptions } from '../../../assets/dummy-data/searchData';
import AtpLink from '../../link/AtpLink';
import './AtpMenuFirstSlide.scss';

type MenuItemProps = {
  text: string;
  onSlideChange: (menuOptionValue: string) => void;
  icon?: boolean;
  toggleMenu: () => void;
  isShoppingCart: boolean;
  isUppercase: boolean;
  topMargin: boolean;
};

const MobileMenuItem: FC<MenuItemProps> = ({
  text,
  icon,
  isShoppingCart,
  isUppercase,
  topMargin,
  onSlideChange,
  toggleMenu,
}) => (
  <>
    {isShoppingCart ? (
      <li
        className="atp-menu-mobile-slide atp-menu-mobile-slide--capitalize atp-menu-mobile-slide--top-margin"
        onClick={toggleMenu}
      >
        <AtpLink to="/shopping-cart">{text}</AtpLink>
      </li>
    ) : (
      <li
        className={classNames(
          'atp-menu-mobile-slide',
          `${
            isUppercase ? 'atp-menu-mobile-slide--uppercase' : 'atp-menu-mobile-slide--capitalize'
          }`,
          `${topMargin ? 'atp-menu-mobile-slide--top-margin' : ''}`
        )}
        onClick={() => onSlideChange(text)}
      >
        {text}
        {icon && <VscChevronRight className="atp-menu-mobile-slide__icon" />}
      </li>
    )}
  </>
);

type Props = {
  onSlideChange: (slideCount: number, title?: string) => void;
  slideCount: number;
  toggleMenu: () => void;
};

export const AtpMenuFirstSlide: FC<Props> = ({ toggleMenu, onSlideChange, slideCount }) => {
  const handleChangeSlide = (title: string) => {
    onSlideChange(slideCount + 1, title);
  };

  return (
    <>
      {menuOptions.map((menuItem) => (
        <MobileMenuItem
          key={'mobile-option-item-' + menuItem.id}
          {...menuItem}
          onSlideChange={handleChangeSlide}
          toggleMenu={toggleMenu}
        />
      ))}
    </>
  );
};

export default AtpMenuFirstSlide;

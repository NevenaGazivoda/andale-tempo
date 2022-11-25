import classNames from 'classnames';
import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { VscChevronRight } from 'react-icons/vsc';
import { strings } from '../../constants/strings';
import AtpButton from '../button/AtpButton';
import AtpLink from '../link/AtpLink';
import './AtpMenuMobile.scss';

type Props = {
  toggleMenu: () => void;
};
const usePrevious = (value: any) => {
  const ref = useRef() as React.MutableRefObject<undefined | string>;

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

type MenuItem = {
  id: number;
  text: string;
  children?: ReactNode;
  linkTo?: string;
  topMargin?: boolean;
};

export const menuOptions: MenuItem[] = [
  {
    id: 0,
    text: strings.MENSWEAR,
    children: 'lol',
  },
  {
    id: 1,
    text: strings.WOMENSWEAR,
  },
  {
    id: 2,
    text: strings.EVERYTHING_ELSE,
  },
  {
    id: 3,
    text: strings.SHOPPING_CART,
    linkTo: '/shopping-cart',
    topMargin: true,
  },
  {
    id: 4,
    text: strings.WISHLIST,
    linkTo: '#',
  },
  {
    id: 5,
    text: strings.LANGUAGE,
    linkTo: '#',
  },
  {
    id: 6,
    text: strings.CUSTOMER_CARE,
    linkTo: '#',
    topMargin: true,
  },
  {
    id: 7,
    text: strings.LIVE_ASSISTANCE,
    linkTo: '#',
  },
  {
    id: 8,
    text: strings.LOCATIONS,
    linkTo: '#',
  },
];

type MenuItemProps = {
  text: string;
  linkTo?: string;
  children?: ReactNode;
  onSlideChange: (menuOptionValue: string) => void;
  toggleMenu: () => void;
  topMargin: boolean;
};

const MobileMenuItem: FC<MenuItemProps> = ({
  text,
  linkTo,
  topMargin,
  children,
  onSlideChange,
  toggleMenu,
}) => (
  <>
    {linkTo ? (
      <li
        className={classNames(
          'atp-menu-mobile-slide atp-menu-mobile-slide--capitalize',
          topMargin && 'atp-menu-mobile-slide--top-margin'
        )}
        onClick={toggleMenu}
      >
        <AtpLink to={linkTo}>{text}</AtpLink>
      </li>
    ) : (
      <li
        className={classNames(
          'atp-menu-mobile-slide',
          `${!linkTo ? 'atp-menu-mobile-slide--uppercase' : 'atp-menu-mobile-slide--capitalize'}`,
          topMargin && 'atp-menu-mobile-slide--top-margin'
        )}
        onClick={() => onSlideChange(text)}
      >
        {text}
        {children && <VscChevronRight className="atp-menu-mobile-slide__icon" />}
      </li>
    )}
  </>
);

export const AtpMenuMobile: FC<Props> = ({ toggleMenu }) => {
  const [slideCounter, setSlideCounter] = useState(0);
  const [title, setTitle] = useState('');
  const previousTitle = usePrevious(title);

  const onSlideChange = (slideCount: number, title?: string) => {
    setSlideCounter(() => {
      return 0 + slideCount;
    });
    title && setTitle(title);
  };

  return (
    <div className="atp-menu-mobile">
      <div className="atp-menu-mobile__header">
        {slideCounter > 0 && (
          <AtpButton
            isSecondary
            onClick={() => onSlideChange(slideCounter - 1, previousTitle)}
            className="atp-menu-mobile__header__back"
          >
            {strings.BACK}
          </AtpButton>
        )}
        {slideCounter > 0 && <span className="atp-menu-mobile__header__title">{title}</span>}
        <AtpButton isSecondary onClick={toggleMenu} className="atp-menu-mobile__header__close">
          {strings.CLOSE}
        </AtpButton>
      </div>

      <ul className="atp-menu-mobile__list">
        {menuOptions.map((menuItem) => (
          <MobileMenuItem
            key={'mobile-menu-item' + menuItem.id}
            {...menuItem}
            topMargin={Boolean(menuItem.topMargin)}
            onSlideChange={() => {
              console.log('');
            }}
            toggleMenu={toggleMenu}
          />
        ))}

        {/* component for sliding featured designers */}
        {/* <li className="atp-menu-mobile-slide atp-menu-mobile-slide--bottom-padding">
          {featuredDesigners.map((designer) => (
            <span
              className="atp-menu-mobile-slide__designers"
              key={designer}
              onClick={() => handleClick(designer)}
            >
              <AtpButton isSecondary className="atp-menu-mobile-slide__button-in-array">
                {designer}
              </AtpButton>
            </span>
          ))}
        </li> */}
      </ul>
    </div>
  );
};

export default AtpMenuMobile;

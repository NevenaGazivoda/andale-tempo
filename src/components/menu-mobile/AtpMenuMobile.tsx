import React, { FC, useEffect, useRef, useState } from 'react';
import { brandsData } from '../../assets/dummy-data/searchData';
import { strings } from '../../constants/strings';
import AtpButton from '../button/AtpButton';
import AtpSearchBrands from '../search-brands/AtpSearchBrands';
import './AtpMenuMobile.scss';
import AtpMenuFirstSlide from './slides/AtpMenuFirstSlide';
import AtpMenuSecondSlide from './slides/AtpMenuSecondSlide';

type Props = {
  toggleMenu: () => void;
};
const usePrevious = (value: any) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

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
        {slideCounter === 0 && (
          <AtpMenuFirstSlide
            toggleMenu={toggleMenu}
            onSlideChange={onSlideChange}
            slideCount={slideCounter}
          />
        )}
        {slideCounter === 1 && (
          <AtpMenuSecondSlide
            onSlideChange={onSlideChange}
            slideCount={slideCounter}
            onCloseMenu={toggleMenu}
          />
        )}

        {slideCounter === 2 && <AtpSearchBrands brands={brandsData} onCloseMenu={toggleMenu} />}
      </ul>
    </div>
  );
};

export default AtpMenuMobile;

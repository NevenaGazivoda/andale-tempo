import React, { FC } from 'react';
import { VscChevronRight } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import { categoriesData, featuredDesigners } from '../../../assets/dummy-data/searchData';
import { strings } from '../../../constants/strings';
import AtpButton from '../../button/AtpButton';
import AtpLink from '../../link/AtpLink';
import AtpSearchCategories from '../../search-categories/AtpSearchCategories';

type Props = {
  onSlideChange: (slideCount: number, title?: string) => void;
  slideCount: number;
  onCloseMenu: () => void;
};

export const AtpMenuSecondSlide: FC<Props> = ({ onSlideChange, slideCount, onCloseMenu }) => {
  const navigate = useNavigate();

  const handleChangeSlide = (title: string) => {
    onSlideChange(slideCount + 1, title);
  };

  const handleClick = (designer: string) => {
    navigate(`/search?term=${designer.toLowerCase()}`);
    onCloseMenu();
  };

  return (
    <>
      <li className="atp-menu-mobile-slide">
        <AtpLink to="/">{strings.TRENDING}</AtpLink>
      </li>
      <li className="atp-menu-mobile-slide">
        <AtpLink to="/">{strings.LATEST_ARRIVALS}</AtpLink>
      </li>
      <li className="atp-menu-mobile-slide" onClick={() => handleChangeSlide(strings.DESIGNERS)}>
        <AtpLink to="/">
          {strings.DESIGNERS}
          <VscChevronRight className="atp-menu-mobile-slide__icon" />
        </AtpLink>
      </li>
      <li className="atp-menu-mobile-slide">
        <AtpLink to="/">{strings.FEATURED + ' ' + strings.DESIGNERS}</AtpLink>
      </li>
      <li className="atp-menu-mobile-slide atp-menu-mobile-slide--bottom-padding">
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
      </li>
      <li className="atp-menu-mobile-slide--no-margin atp-menu-mobile-slide--top-margin">
        <AtpSearchCategories categories={categoriesData} depthLevel={0} isMenuItem={true} />
      </li>
    </>
  );
};

export default AtpMenuSecondSlide;

import { FC } from 'react';
import { VscChevronRight } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import { categoriesData } from '../../../assets/dummy-data/searchData';
import { strings } from '../../../constants/strings';
import AtpLink from '../../link-atp/AtpLink';
import AtpMenuCategories from './AtpMenuCategories';

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

      <li className=" atp-menu-mobile-slide--top-margin">
        <AtpMenuCategories categories={categoriesData} depthLevel={0} />
        {/* <AtpSearchCategories categories={categoriesData} depthLevel={0} isMenuItem={true} /> */}
      </li>
    </>
  );
};

export default AtpMenuSecondSlide;

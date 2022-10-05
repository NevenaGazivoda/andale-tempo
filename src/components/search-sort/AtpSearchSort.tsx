import React from 'react';
import { strings } from '../../constants/strings';
import AtpLink from '../link/AtpLink';
import AtpText from '../text/AtpText';
import './AtpSearchSort.scss';

export const AtpSearchSort = () => {
  return (
    <div className="atp-search-sort">
      <AtpText className="atp-search-sort__title">{strings.SORT}</AtpText>

      <AtpLink className="atp-search-sort__link" to={''}>
        {strings.LATEST_ARRIVALS}
      </AtpLink>
      <AtpLink className="atp-search-sort__link" to={''}>
        {strings.TRENDING}
      </AtpLink>
      <AtpLink className="atp-search-sort__link" to={''}>
        {strings.PRICE + ' ' + strings.LOW_TO_HIGH}
      </AtpLink>
      <AtpLink className="atp-search-sort__link" to={''}>
        {strings.PRICE + ' ' + strings.HIGH_TO_LOW}
      </AtpLink>
    </div>
  );
};

export default AtpSearchSort;

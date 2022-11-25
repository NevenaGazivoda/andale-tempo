import React from 'react';
import AtpLink from '../../components/link-atp/AtpLink';
import AtpText from '../../components/text/AtpText';
import { strings } from '../../constants/strings';
import './AtpNotFound.scss';

export const AtpNotFound = () => {
  return (
    <div className="atp-page atp-404">
      <h1>{strings.PAGE_NOT_FOUND}</h1>
      <AtpText>{strings.PAGE_NOT_FOUND_APOLOGIE}</AtpText>
      <AtpLink to="/">{strings.RETURN_TO_HOME_PAGE}</AtpLink>
    </div>
  );
};

export default AtpNotFound;

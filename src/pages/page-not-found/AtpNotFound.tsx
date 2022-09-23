import React from 'react';
import AtpLink from '../../components/link/AtpLink';
import AtpText from '../../components/text/AtpText';
import './AtpNotFound.scss';

export const AtpNotFound = () => {
  return (
    <div className="atp-page atp-404">
      <h1>Page not found</h1>
      <AtpText>We are sorry but this page is no longer available on our web site.</AtpText>
      <AtpLink to="/">Return to home page</AtpLink>
    </div>
  );
};

export default AtpNotFound;

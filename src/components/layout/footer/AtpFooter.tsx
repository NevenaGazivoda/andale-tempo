import React from 'react';
import AtpText from '../../common/text/AtpText';
import './AtpFooter.scss';

export const AtpFooter = () => {
  return (
    <>
      <AtpText className="atp-footer">Andale Tempo © 2022</AtpText>
      <AtpText className="atp-footer">
        The project was created for learning purpose based on the site ssense.com
      </AtpText>
    </>
  );
};

export default AtpFooter;

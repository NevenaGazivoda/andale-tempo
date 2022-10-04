import React from 'react';
import './AtpSearchPage.scss';
import AtpSearchBox from '../../components/search-box/AtpSearchBox';
import AtpSearchSelection from '../../components/search-selection/AtpSearchSelection';
import AtpSearchArticles from '../../components/search-articles/AtpSearchArticles';

export const AtpSearchPage = () => {
  return (
    <div className="atp-page atp-search">
      <AtpSearchBox />
      <AtpSearchSelection />

      <AtpSearchArticles />
    </div>
  );
};

export default AtpSearchPage;

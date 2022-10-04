import React from 'react';
import { ARTICLES_DATA } from '../../assets/dummy-data/articlesData';
import AtpArticleCard from '../article-card/AtpArticleCard';
import './AtpSearchArticles.scss';

export const AtpSearchArticles = () => {
  return (
    <div className="atp-search-articles">
      {ARTICLES_DATA.map((card, cardIndex) => (
        <AtpArticleCard key={cardIndex} article={card} />
      ))}
    </div>
  );
};

export default AtpSearchArticles;

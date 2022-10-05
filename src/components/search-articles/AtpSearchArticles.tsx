import React, { FC } from 'react';
import { strings } from '../../constants/strings';
import { Article } from '../../models/article.model';
import AtpArticleCard from '../article-card/AtpArticleCard';
import AtpText from '../text/AtpText';
import './AtpSearchArticles.scss';

type Props = {
  term: string;
  articles: Article[];
};

export const AtpSearchArticles: FC<Props> = ({ term, articles }) => {
  return (
    <div className="atp-search-articles">
      <AtpText className="atp-search-articles__title">
        {strings.SHOWING_RESULTS_FOR + " '" + term + "'"}
      </AtpText>
      <div className="atp-search-articles__grid">
        {articles.map((card) => (
          <AtpArticleCard key={card.articleCode + card.articleName} article={card} isArticleName />
        ))}
        {articles.map((card, cardIndex) => (
          <AtpArticleCard key={cardIndex} article={card} isArticleName />
        ))}
        {articles.map((card, cardIndex) => (
          <AtpArticleCard key={cardIndex} article={card} isArticleName />
        ))}
        {articles.map((card, cardIndex) => (
          <AtpArticleCard key={cardIndex} article={card} isArticleName />
        ))}
        {articles.map((card, cardIndex) => (
          <AtpArticleCard key={cardIndex} article={card} isArticleName />
        ))}
      </div>
    </div>
  );
};

export default AtpSearchArticles;

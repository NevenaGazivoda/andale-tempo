import React, { FC } from 'react';
import AtpArticleCard from '../article-card/AtpArticleCard';
import AtpText from '../text/AtpText';
import './AtpRecentlyViewed.scss';
import { strings } from '../../constants/strings';
import { Article } from '../../models/article.model';

type Props = {
  article: Article;
};

export const AtpRecentlyViewed: FC<Props> = ({ article }) => {
  const recentItems = JSON.parse(localStorage.getItem('recent') || '[]') as Article[];

  return (
    <div className="atp-recently-viewed">
      {recentItems.length > 1 && <AtpText>{strings.RECENTLY_VIEWED}</AtpText>}
      <div className="atp-recently-viewed__articles">
        {recentItems
          .filter((card) => card.articleCode !== article.articleCode)
          .map((filteredCard, cardIndex) => (
            <AtpArticleCard key={cardIndex} article={filteredCard} />
          ))}
      </div>
    </div>
  );
};

export default AtpRecentlyViewed;

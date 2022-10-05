import React, { FC, PropsWithChildren } from 'react';
import { Article } from '../../models/article.model';
import AtpLink from '../link/AtpLink';
import AtpPrice from '../price/AtpPrice';
import './AtpArticleCard.scss';

type Props = PropsWithChildren<{
  article: Article;
  isArticleName?: boolean;
}>;

export const AtpArticleCard: FC<Props> = ({ article, isArticleName }) => (
  <div className="atp-article-card">
    <AtpLink to={`/article/${article.articleCode}`}>
      <img
        className="atp-article-card__photo"
        src={article.images[0].url}
        alt={article.images[0].title}
      />
    </AtpLink>

    <div className="atp-article-card__info">
      <AtpLink className="atp-article-card__link" to={`/article/${article.articleCode}`}>
        {article.brand}
      </AtpLink>
      {isArticleName && (
        <AtpLink
          className="atp-article-card__link atp-article-card__link--capitalize"
          to={`/article/${article.articleCode}`}
        >
          {article.articleName}
        </AtpLink>
      )}

      <AtpPrice price={article.price} newPrice={article.newPrice} discount={article.discount} />
    </div>
  </div>
);

export default AtpArticleCard;

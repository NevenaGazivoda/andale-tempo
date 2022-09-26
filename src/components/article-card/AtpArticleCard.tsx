import React, { FC, PropsWithChildren } from 'react';
import { Article } from '../../models/article.model';
import AtpLink from '../link/AtpLink';
import AtpPrice from '../price/AtpPrice';
import './AtpArticleCard.scss';

type Props = PropsWithChildren<{
  article: Article;
}>;

export const AtpArticleCard: FC<Props> = ({ article }) => (
  <div className="atp-card">
    <AtpLink to={`/article/${article.articleCode}`}>
      <img className="atp-card__photo" src={article.images[0].url} alt={article.images[0].title} />
    </AtpLink>

    <div className="atp-card__info">
      <AtpLink className="atp-card__link" to={`/article/${article.articleCode}`}>
        {article.brand}
      </AtpLink>
      <AtpPrice price={article.price} newPrice={article.newPrice} discount={article.discount} />
    </div>
  </div>
);

export default AtpArticleCard;

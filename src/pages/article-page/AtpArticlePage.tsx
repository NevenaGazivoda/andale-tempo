import React, { FC, useEffect } from 'react';
import AtpRecentlyViewed from '../../components/recently-viewed/AtpRecentlyViewed';
import AtpArticle from '../../components/article/AtpArticle';
import { ARTICLES_DATA } from '../../assets/dummy-data/articlesData';
import { useParams } from 'react-router-dom';
import { Article } from '../../models/article.model';
import { CartItem } from '../../models/cartItem.model';
import { addToCart } from '../../utilities/shoppingCart';

export const AtpArticlePage: FC = () => {
  const { articleCode } = useParams();
  const article = ARTICLES_DATA.find((article) => article.articleCode === articleCode) as Article;

  const recentItems = localStorage.getItem('recent')
    ? JSON.parse(localStorage.getItem('recent') as string)
    : JSON.parse('[]');

  useEffect(() => {
    if (
      !recentItems.find((item: { articleCode: string }) => item.articleCode === article.articleCode)
    ) {
      localStorage.setItem('recent', JSON.stringify([article, ...recentItems]));
    }
  }, []);

  const handleAddToCart = (clickedItem: CartItem) => {
    addToCart(clickedItem);
  };

  return (
    <>
      <div className="atp-page">
        <AtpArticle article={article} handleAddToCart={handleAddToCart} />
        <AtpRecentlyViewed article={article} />
      </div>
    </>
  );
};

export default AtpArticlePage;

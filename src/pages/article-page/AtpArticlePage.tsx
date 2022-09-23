import React, { FC, useEffect, useState } from 'react';
import AtpRecentlyViewed from '../../components/recently-viewed/AtpRecentlyViewed';
import AtpArticle from '../../components/article/AtpArticle';
import { ARTICLES_DATA } from '../../assets/dummy-data/atp-data';
import { useParams } from 'react-router-dom';
import { Article } from '../../models/article.model';
import { CartItem } from '../../models/cart-item.model';

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

  const [cart, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[]
  );

  const handleAddToCart = (item: CartItem) => {
    const cartItem = {
      brand: item.brand,
      articleName: item.articleName,
      articleCode: item.articleCode,
      size: item.size,
      price: item.price,
      image: item.image,
    };

    const cartCopy = [...cart];

    cartCopy.push(cartItem);

    setCartItems(cartCopy);

    localStorage.setItem('cart', JSON.stringify(cartCopy));

    window.dispatchEvent(new Event('storage'));
  };

  return (
    <>
      <div className="atp-page">
        <AtpArticle article={article} handleAddToCart={handleAddToCart} />
      </div>

      <AtpRecentlyViewed article={article} />
    </>
  );
};

export default AtpArticlePage;

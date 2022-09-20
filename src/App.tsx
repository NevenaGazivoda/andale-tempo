import React, { useState } from 'react';
import './App.scss'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AtpNavbar } from './components/navbar/AtpNavbar';
import { AtpArticlePage } from './pages/article-page/AtpArticlePage';
import Home from './pages/home/Home';
import AtpNotFound from './pages/page-not-found/AtpNotFound';
import AtpFooter from './pages/footer/AtpFooter';
import { ARTICLES_DATA } from './assets/dummy-data/atp-data';
import AtpShoppingCart from './pages/shopping-cart/AtpShoppingCart';
import { Article } from './models/article.model';

export const App = () => {

  const [cartItems, setCartItems] = useState([] as Article[])

  const handleAddToCart = (clickedArticle: Article) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.articleCode === clickedArticle.articleCode);

      if (isItemInCart) {
        return prev.map(item =>
          item.articleCode === clickedArticle.articleCode
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedArticle, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev =>
      prev.reduce((items, item) => {
        if (item.articleCode === id) {
          if (item.amount === 1) return items;
          return [...items, { ...item, amount: item.amount - 1 }];
        } else {
          return [...items, item];
        }
      }, [] as Article[])
    );
  };

  const getTotalItems = (items: Article[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  return (
    <Router>
      <header>
        <AtpNavbar totalItems={getTotalItems(cartItems)} />
      </header>

      <Routes>
        <Route path="/" element={<Home articles={ARTICLES_DATA} />} />
        <Route path="/article/:articleCode" element={<AtpArticlePage handleAddToCart={handleAddToCart} />} />
        <Route path='/shopping-cart' element={<AtpShoppingCart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart} />} />
        <Route path="*" element={<AtpNotFound />} />
      </Routes>

      <footer>
        <AtpFooter />
      </footer>
    </Router>
  );
}

export default App;
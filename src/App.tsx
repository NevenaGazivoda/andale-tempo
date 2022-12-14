import React, { useEffect, useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AtpNavbar } from './components/navbar-atp/AtpNavbar';
import { AtpArticlePage } from './pages/article-page/AtpArticlePage';
import Home from './pages/home-page/Home';
import AtpNotFound from './pages/page-not-found/AtpNotFound';
import AtpFooter from './components/footer/AtpFooter';
import { ARTICLES_DATA } from './assets/dummy-data/articlesData';
import AtpShoppingCart from './pages/shopping-cart/AtpShoppingCart';
import { Article } from './models/article.model';
import AtpSearchPage from './pages/search-page/AtpSearchPage';

export const App = () => {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]') as Article[];
  const [totalItems, setTotalItems] = useState(cart.length);

  useEffect(() => {
    window.localStorage.getItem('cart' || '[]');

    const getTotalItems = () => {
      setTotalItems((JSON.parse(localStorage.getItem('cart') || '[]') as Article[]).length);
    };

    window.addEventListener('storage', getTotalItems);

    return () => {
      window.removeEventListener('storage', getTotalItems);
    };
  }, []);

  // enum ROUTE_NAMES = {
  //   home: '/'
  // }

  return (
    <Router>
      <header>
        <AtpNavbar totalItems={totalItems} />
      </header>

      <Routes>
        <Route path="/" element={<Home articles={ARTICLES_DATA} />} />
        <Route path="/article/:articleCode" element={<AtpArticlePage />} />
        <Route path="/shopping-cart" element={<AtpShoppingCart />} />
        <Route path="/search" element={<AtpSearchPage />} />
        <Route path="/search/:designer" element={<AtpSearchPage />} />
        <Route path="*" element={<AtpNotFound />} />
      </Routes>

      <footer>
        <AtpFooter />
      </footer>
    </Router>
  );
};

export default App;

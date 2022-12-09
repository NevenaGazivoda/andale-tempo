import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AtpNavbar } from './components/navbar-atp/AtpNavbar';
import { AtpArticlePage } from './pages/article-page/AtpArticlePage';
import Home from './pages/home-page/Home';
import AtpNotFound from './pages/page-not-found/AtpNotFound';
import AtpFooter from './components/footer/AtpFooter';
import { ARTICLES_DATA } from './assets/dummy-data/articlesData';
import AtpShoppingCart from './pages/shopping-cart/AtpShoppingCart';
import AtpSearchPage from './pages/search-page/AtpSearchPage';
import ShoppingCartStore from './utilities/ShoppingCartStore';

export const App = () => {
  const shoppingStore = new ShoppingCartStore();

  // enum ROUTE_NAMES = {
  //   home: '/'
  // }

  return (
    <Router>
      <header>
        <AtpNavbar store={shoppingStore} />
      </header>

      <Routes>
        <Route path="/" element={<Home articles={ARTICLES_DATA} />} />
        <Route path="/article/:articleCode" element={<AtpArticlePage store={shoppingStore} />} />
        <Route path="/shopping-cart" element={<AtpShoppingCart store={shoppingStore} />} />
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

import React from 'react';
import './App.scss'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AtpNavbar } from './components/navbar/AtpNavbar';
import AtpArticle from './pages/article/AtpArticle';
import Home from './pages/home/Home';
import Atp404 from './pages/page404/Atp404';
import AtpFooter from './pages/footer/AtpFooter';
import { ARTICLES_DATA } from './assets/dummy-data/atp-data';

export const App = () => {
  return (
    <Router>
      <header>
        <AtpNavbar />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<AtpArticle article={ARTICLES_DATA[0]} />} />
        <Route path="*" element={<Atp404 />} />
      </Routes>

      <footer>
        <AtpFooter />
      </footer>
    </Router>
  );
}

export default App;
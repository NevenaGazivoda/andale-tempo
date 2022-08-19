import React from 'react';
import './App.scss'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AtpNavbar } from './components/navbar/AtpNavbar';
import AtpArticle from './pages/article/AtpArticle';
import Home from './pages/home/Home';

export const App = () => {
  return (
    <Router>
      <AtpNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<AtpArticle />} />
      </Routes>
    </Router>
  );
}

export default App;

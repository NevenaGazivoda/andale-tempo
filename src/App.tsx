import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AtpArticle from './pages/Article/AtpArticle';
import Home from './pages/Home/Home';
import './App.scss'
import { AtpNavbar } from './components/Navbar/AtpNavbar';

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

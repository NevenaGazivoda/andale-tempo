import React, { useEffect, useState } from 'react';
import './AtpSearchPage.scss';
import { useLocation } from 'react-router-dom';
import AtpSearchSelection from '../../components/search-selection/AtpSearchSelection';
import AtpSearchArticles from '../../components/search-articles/AtpSearchArticles';
import AtpSearchSort from '../../components/search-sort/AtpSearchSort';
import { ARTICLES_DATA } from '../../assets/dummy-data/articlesData';
import { Article } from '../../models/article.model';

export const AtpSearchPage = () => {
  const { search } = useLocation();
  const [searchResults, setSearchResults] = useState<Article[]>([]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    const term = search.split('=')[1];
    console.log(term);

    const articles = ARTICLES_DATA.filter((article) =>
      article.brand.toLowerCase().startsWith(term)
    ) as Article[];

    setTerm(term);
    setSearchResults(articles);
  }, [search]);

  // const queryParams = new URLSearchParams(window.location.search);
  // const term = queryParams.get('term') || '';
  // console.log(term);

  // const articles = ARTICLES_DATA.filter(
  //   (article) =>
  //     Object.values(article)
  //       .map((v) => v.toString().toLowerCase())
  //       .includes(term)

  //   //(article) => article.brand.toLowerCase() === term.toLowerCase()
  // ) as Article[];

  return (
    <div className="atp-page atp-search">
      <AtpSearchSelection />

      <AtpSearchArticles term={term} articles={searchResults} />
      <AtpSearchSort />
    </div>
  );
};

export default AtpSearchPage;

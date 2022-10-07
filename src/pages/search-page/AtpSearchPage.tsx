import React, { useEffect, useState } from 'react';
import './AtpSearchPage.scss';
import { useLocation } from 'react-router-dom';
import { AtpSearchFilters } from '../../components/search-selection/AtpSearchFilters';
import AtpSearchArticles from '../../components/search-articles/AtpSearchArticles';
import AtpSearchSort from '../../components/search-sort/AtpSearchSort';
import { ARTICLES_DATA } from '../../assets/dummy-data/articlesData';
import { Article } from '../../models/article.model';
import AtpButton from '../../components/button/AtpButton';
import { strings } from '../../constants/strings';

export const AtpSearchPage = () => {
  const { search } = useLocation();
  const [searchResults, setSearchResults] = useState<Article[]>([]);
  const [term, setTerm] = useState('');

  const [isSortOpen, setIsSortOpen] = useState(false);

  const toggleSort = () => {
    setIsSortOpen(!isSortOpen);
  };

  const [areFiltersOpen, setAreFiltersOpen] = useState(false);

  const toggleFilters = () => {
    setAreFiltersOpen(!areFiltersOpen);
  };
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
      <div className="atp-search__mobile">
        <div className="atp-search__mobile__buttons">
          <div className="atp-search__mobile__buttons__field atp-search__mobile__buttons__field--refine">
            <AtpButton
              className="atp-search__mobile__buttons__field__button"
              isSecondary
              onClick={toggleFilters}
            >
              {strings.REFINE}
            </AtpButton>
            {areFiltersOpen && <AtpSearchFilters toggleFilters={toggleFilters} />}
          </div>
          <div className="atp-search__mobile__buttons__field">
            <AtpButton
              className="atp-search__mobile__buttons__field__button"
              isSecondary
              onClick={toggleSort}
            >
              {strings.SORT}
            </AtpButton>
          </div>
          {isSortOpen && <AtpSearchSort toggleSort={toggleSort} />}
        </div>
        <AtpSearchArticles term={term} articles={searchResults} />
      </div>

      <div className="atp-search__desktop">
        <AtpSearchFilters toggleFilters={toggleFilters} />
        <AtpSearchArticles term={term} articles={searchResults} />
        <AtpSearchSort toggleSort={toggleSort} />
      </div>
    </div>
  );
};

export default AtpSearchPage;

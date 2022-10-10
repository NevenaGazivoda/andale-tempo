import React, { useEffect, useState } from 'react';
import './AtpSearchPage.scss';
import { useLocation, useParams } from 'react-router-dom';
import { AtpSearchFilters } from '../../components/search-selection/AtpSearchFilters';
import AtpSearchArticles from '../../components/search-articles/AtpSearchArticles';
import AtpSearchSort from '../../components/search-sort/AtpSearchSort';
import { ARTICLES_DATA } from '../../assets/dummy-data/articlesData';
import { Article } from '../../models/article.model';
import AtpButton from '../../components/button/AtpButton';
import { strings } from '../../constants/strings';

export const AtpSearchPage = () => {
  const { search } = useLocation();
  const { designer } = useParams();

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

    if (term) {
      const articles = ARTICLES_DATA.filter((article) =>
        article.brand.toLowerCase().startsWith(term)
      ) as Article[];

      setTerm(term);
      setSearchResults(articles);
    }

    if (designer) {
      const articles = ARTICLES_DATA.filter(
        (article) => article.brand.toLowerCase() === designer.toLowerCase()
      ) as Article[];

      setTerm(designer);
      setSearchResults(articles);
    }
  }, [search, designer]);

  // const queryParams = new URLSearchParams(window.location.search);
  // const term = queryParams.get('term') || '';
  // console.log(term);

  // const articles = ARTICLES_DATA.filter(
  //   (article) =>
  //     Object.values(article)
  //       .map((v) => v.toString().toLowerCase())
  //       .includes(term)
  // ) as Article[];

  const [sortOrder, setSortOrder] = useState('low to high');

  useEffect(() => {
    switch (sortOrder) {
      case 'low to high':
        setSearchResults(searchResults.sort((a, b) => a.price - b.price));
        break;
      case 'high to low':
        setSearchResults(searchResults.sort((a, b) => b.price - a.price));
        break;
      default:
        setSearchResults(searchResults);
        break;
    }
    console.log(sortOrder);
  }, [sortOrder]);

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
          {isSortOpen && <AtpSearchSort toggleSort={toggleSort} sortingResults={setSortOrder} />}
        </div>
        <AtpSearchArticles term={term} articles={searchResults} />
      </div>

      <div className="atp-search__desktop">
        <AtpSearchFilters toggleFilters={toggleFilters} />
        <AtpSearchArticles term={term} articles={searchResults} />
        <AtpSearchSort toggleSort={toggleSort} sortingResults={setSortOrder} />
      </div>
    </div>
  );
};

export default AtpSearchPage;

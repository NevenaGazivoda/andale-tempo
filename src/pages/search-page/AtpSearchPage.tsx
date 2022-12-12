import { ARTICLES_DATA } from 'assets/dummy-data/articlesData';
import { colorsData, brandsData, categoriesData } from 'assets/dummy-data/searchData';
import AtpButton from 'components/common/button/AtpButton';
import AtpSearchArticles from 'components/search/search-articles/AtpSearchArticles';
import AtpSearchColors from 'components/search/search-colors/AtpSearchColors';
import AtpSearchFilters from 'components/search/search-selection/AtpSearchFilters';
import AtpSearchSort from 'components/search/search-sort/AtpSearchSort';
import { strings } from 'constants/strings';
import { Article } from 'models/article.model';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import './AtpSearchPage.scss';

export const AtpSearchPage = () => {
  const { search } = useLocation();
  const { designer } = useParams();

  const searchResults = localStorage.getItem('search')
    ? JSON.parse(localStorage.getItem('search') as string)
    : JSON.parse('[]');

  // const [searchResults, setSearchResults] = useState<Article[]>([]);
  const [term, setTerm] = useState('');

  const [isSortOpen, setIsSortOpen] = useState(false);

  const toggleSort = () => {
    setIsSortOpen(!isSortOpen);
  };

  const [areFiltersOpen, setAreFiltersOpen] = useState(false);

  const toggleFilters = () => {
    setAreFiltersOpen(!areFiltersOpen);
  };

  const [params] = useSearchParams();

  //const params = new URLSearchParams(location.search);

  const colorsArray = params.get('color')?.toString().split(',');
  const brandsArray = params.get('brand')?.toString().split(',');
  const categoriesArray = params.get('category')?.toString().split(',');

  const colorsFromUrl = colorsData.filter((color) =>
    colorsArray ? colorsArray.includes(color.label.toLowerCase()) : ''
  );
  const brandsFromUrl = brandsData.filter((brand) =>
    brandsArray ? brandsArray.includes(brand.id.toString()) : ''
  );
  const categoriesFromUrl = categoriesData.filter((category) =>
    categoriesArray ? categoriesArray.includes(category.id.toString()) : ''
  );
  const filters = [...colorsFromUrl, ...brandsFromUrl, ...categoriesFromUrl];

  useEffect(() => {
    const term = params.get('term');

    if (term) {
      // Simulate BE filtering delay
      setTimeout(() => {
        const articles = ARTICLES_DATA.filter((article) =>
          article.brand.toLowerCase().startsWith(term)
        ) as Article[];

        setTerm(term);
        localStorage.setItem('search', JSON.stringify(articles));
      }, 500);
    }
  }, [search]);

  useEffect(() => {
    if (designer) {
      const articles = ARTICLES_DATA.filter(
        (article) => article.brand.toLowerCase() === designer.toLowerCase()
      ) as Article[];

      setTerm(designer);
      localStorage.setItem('search', JSON.stringify(articles));
    }
  }, [designer]);

  const [sortOrder, setSortOrder] = useState('latest-arrivals');

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
              {strings.REFINE + ' (' + filters.length + ')'}
            </AtpButton>
            {areFiltersOpen && (
              <AtpSearchFilters urlFilters={filters} toggleFilters={toggleFilters} />
            )}
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
          {isSortOpen && (
            <AtpSearchSort
              selectedSort={sortOrder}
              toggleSort={toggleSort}
              onChangeSortOrder={setSortOrder}
            />
          )}
        </div>
        <AtpSearchArticles term={term} articles={searchResults} />
      </div>

      <div className="atp-search__desktop">
        <AtpSearchFilters urlFilters={filters} toggleFilters={toggleFilters} />
        <AtpSearchArticles term={term} articles={searchResults} />
        <div className="atp-search-sort-mobile">
          <AtpSearchSort
            selectedSort={sortOrder}
            toggleSort={toggleSort}
            onChangeSortOrder={setSortOrder}
          />
          <div className="atp-search-filters-desktop__title atp-search-filters-desktop__link">
            {strings.ALL + ' ' + strings.COLORS}
          </div>
          <AtpSearchColors colors={colorsData} />
        </div>
      </div>
    </div>
  );
};

export default AtpSearchPage;

import React from 'react';
import AtpArticleCard from '../article-card/AtpArticleCard';
import AtpText from '../text/AtpText';
import './AtpRecentlyViewed.scss';
import { ARTICLES_DATA } from '../../assets/dummy-data/atp-data';
import { strings } from '../../constants/strings';

export const AtpRecentlyViewed = () => (
    <div className='atp-recently-viewed'>
        <AtpText>{strings.RECENTLY_VIEWED}</AtpText>
        <div className='atp-recently-viewed__articles'>
            <AtpArticleCard image={ARTICLES_DATA[0].images[0]} brand={ARTICLES_DATA[0].brand} price={ARTICLES_DATA[0].price} articleCode={ARTICLES_DATA[0].articleCode} />
            <AtpArticleCard image={ARTICLES_DATA[1].images[0]} brand={ARTICLES_DATA[1].brand} price={ARTICLES_DATA[1].price} articleCode={ARTICLES_DATA[1].articleCode} />
            <AtpArticleCard image={ARTICLES_DATA[2].images[0]} brand={ARTICLES_DATA[2].brand} price={ARTICLES_DATA[2].price} articleCode={ARTICLES_DATA[2].articleCode} />
            <AtpArticleCard image={ARTICLES_DATA[0].images[0]} brand={ARTICLES_DATA[0].brand} price={ARTICLES_DATA[0].price} articleCode={ARTICLES_DATA[0].articleCode} />
            <AtpArticleCard image={ARTICLES_DATA[1].images[0]} brand={ARTICLES_DATA[1].brand} price={ARTICLES_DATA[1].price} articleCode={ARTICLES_DATA[1].articleCode} />
            <AtpArticleCard image={ARTICLES_DATA[2].images[0]} brand={ARTICLES_DATA[2].brand} price={ARTICLES_DATA[2].price} articleCode={ARTICLES_DATA[2].articleCode} />
            <AtpArticleCard image={ARTICLES_DATA[0].images[0]} brand={ARTICLES_DATA[0].brand} price={ARTICLES_DATA[0].price} articleCode={ARTICLES_DATA[0].articleCode} />
            <AtpArticleCard image={ARTICLES_DATA[1].images[0]} brand={ARTICLES_DATA[1].brand} price={ARTICLES_DATA[1].price} articleCode={ARTICLES_DATA[1].articleCode} />
            <AtpArticleCard image={ARTICLES_DATA[2].images[0]} brand={ARTICLES_DATA[2].brand} price={ARTICLES_DATA[2].price} articleCode={ARTICLES_DATA[2].articleCode} />
        </div>
    </div>
);


export default AtpRecentlyViewed;

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
            <AtpArticleCard article={ARTICLES_DATA[0]} />
            <AtpArticleCard article={ARTICLES_DATA[1]} />
            <AtpArticleCard article={ARTICLES_DATA[2]} />
            <AtpArticleCard article={ARTICLES_DATA[0]} />
            <AtpArticleCard article={ARTICLES_DATA[1]} />
            <AtpArticleCard article={ARTICLES_DATA[2]} />
            <AtpArticleCard article={ARTICLES_DATA[0]} />
            <AtpArticleCard article={ARTICLES_DATA[1]} />
            <AtpArticleCard article={ARTICLES_DATA[2]} />
            <AtpArticleCard article={ARTICLES_DATA[0]} />
            <AtpArticleCard article={ARTICLES_DATA[1]} />
            <AtpArticleCard article={ARTICLES_DATA[2]} />
        </div>
    </div>
);


export default AtpRecentlyViewed;

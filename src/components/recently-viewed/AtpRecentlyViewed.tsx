import React from 'react';
import AtpArticleCard from '../article-card/AtpArticleCard';
import AtpText from '../text/AtpText';
import './AtpRecentlyViewed.scss';
import { strings } from '../../constants/strings';
import { Article } from '../../models/article.model';

export const AtpRecentlyViewed = () => {

    const recentItems = JSON.parse(localStorage.getItem("recent")!) as Article[];

    return (
        <div className='atp-recently-viewed'>
            <AtpText>{strings.RECENTLY_VIEWED}</AtpText>
            <div className='atp-recently-viewed__articles'>
                {recentItems.map((card, cardIndex) => (
                    <AtpArticleCard key={cardIndex} article={card} />
                ))}
                {/* <AtpArticleCard article={ARTICLES_DATA[0]} />
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
                <AtpArticleCard article={ARTICLES_DATA[2]} /> */}
            </div>
        </div>
    )
};


export default AtpRecentlyViewed;

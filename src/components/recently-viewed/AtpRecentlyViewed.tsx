import React, { FC } from 'react';
import AtpArticleCard from '../article-card/AtpArticleCard';
import AtpText from '../text/AtpText';
import './AtpRecentlyViewed.scss';
import { strings } from '../../constants/strings';
import { Article } from '../../models/article.model';
import { ARTICLES_DATA } from '../../assets/dummy-data/atp-data';

type Props = {
    article: Article,
}

export const AtpRecentlyViewed: FC<Props> = ({ article }) => {

    const recentItems = JSON.parse(localStorage.getItem("recent") || '[]') as Article[];

    return (

        <div className='atp-recently-viewed'>
            {recentItems.length > 1 &&
                <AtpText>{strings.RECENTLY_VIEWED}</AtpText>
            }
            <div className='atp-recently-viewed__articles'>
                {recentItems.filter((card) => card.articleCode !== article.articleCode).map(
                    (filteredCard, cardIndex) => (
                        <AtpArticleCard key={cardIndex} article={filteredCard} />
                    )
                )}
                {/* <AtpArticleCard article={ARTICLES_DATA[1]} />
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

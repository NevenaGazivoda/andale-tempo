import React, { FC } from 'react';
import AtpArticleCard from '../../components/article-card/AtpArticleCard';
import AtpText from '../../components/text/AtpText';
import { Article } from '../../models/article.model';
import './Home.scss'

type Props = {
    articles: Article[];
}

export const AtpHome: FC<Props> = ({ articles }) => {

    return (
        <div className='atp-page atp-home'>
            <AtpText>ARTICLES</AtpText>
            <div className='atp-recently-viewed__articles'>
                {articles.map((card, cardIndex) => (
                    <AtpArticleCard key={cardIndex} articleCode={card.articleCode} image={card.images[0]} brand={card.brand} price={card.price} />
                ))}
            </div>
        </div>
    );
}

export default AtpHome;

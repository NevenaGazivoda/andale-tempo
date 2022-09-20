import React, { FC, useState } from 'react';
import AtpArticleCard from '../../components/article-card/AtpArticleCard';
import AtpText from '../../components/text/AtpText';
import { Article } from '../../models/article.model';
import './Home.scss'

type Props = {
    articles: Article[];
}

export const AtpHome: FC<Props> = ({ articles }) => {

    const handleAddToRecent = (clickedArticle: Article) => {
        const recentItems = localStorage.getItem("recent") ? JSON.parse(localStorage.getItem("recent") as string) : JSON.parse('[]')

        if (!recentItems.find((item: { articleCode: string; }) => item.articleCode === clickedArticle.articleCode)) {
            localStorage.setItem("recent", JSON.stringify([clickedArticle, ...(localStorage.getItem("recent") ? JSON.parse(localStorage.getItem("recent") as string) : JSON.parse('[]'))]))
        }
    };

    return (
        <div className='atp-page atp-home'>
            <AtpText>ARTICLES</AtpText>
            <div className='atp-recently-viewed__articles'>
                {articles.map((card, cardIndex) => (
                    <div key={cardIndex} onClick={() => handleAddToRecent(card)}>
                        <AtpArticleCard article={card} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AtpHome;

import React, { FC, useEffect } from 'react';
import AtpRecentlyViewed from '../../components/recently-viewed/AtpRecentlyViewed';
import AtpArticle from '../../components/article/AtpArticle';
import { ARTICLES_DATA } from '../../assets/dummy-data/atp-data';
import { useParams } from 'react-router-dom';
import { Article } from '../../models/article.model';

type Props = {
    handleAddToCart: (clickedItem: Article) => void;
};

export const AtpArticlePage: FC<Props> = ({ handleAddToCart }) => {
    const { articleCode } = useParams();
    const article = ARTICLES_DATA.find(article => article.articleCode === articleCode) as Article;

    const recentItems = localStorage.getItem("recent") ? JSON.parse(localStorage.getItem("recent") as string) : JSON.parse('[]')

    useEffect(() => {
        if (!recentItems.find((item: { articleCode: string; }) => item.articleCode === article.articleCode)) {
            localStorage.setItem("recent", JSON.stringify([article, ...recentItems]))
        }
    }, [])

    return (
        <>
            <div className="atp-page">
                <AtpArticle article={article} handleAddToCart={handleAddToCart} />
            </div >

            <AtpRecentlyViewed article={article} />
        </>
    );
}

export default AtpArticlePage;

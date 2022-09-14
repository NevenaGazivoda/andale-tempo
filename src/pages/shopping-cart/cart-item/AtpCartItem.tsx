import React, { FC } from 'react';
import { ARTICLES_DATA } from '../../../assets/dummy-data/atp-data';
import AtpLink from '../../../components/link/AtpLink';
import AtpPrice from '../../../components/price/AtpPrice';
import AtpText from '../../../components/text/AtpText';
import { Article } from '../../../models/article.model';
import './AtpCartItem.scss'

type Props = {
    article: Article;
    addToCart: (clickedItem: Article) => void;
    removeFromCart: (id: string) => void;
};

export const AtpCartItem: FC<Props> = ({ article, addToCart, removeFromCart }) => {

    return (
        <>
            <div className='atp-item__elements'>
                <img className='atp-item__elements__photo' src={article.images[0].url} alt={article.images[0].title} />
                <div className='atp-item__elements__description'>
                    <AtpLink to={''}>{article.brand}</AtpLink>
                    <AtpText>{article.articleName}</AtpText>
                    <AtpText>SIZE: L</AtpText>
                </div>
            </div>
            <div className='atp-item__price'>
                <AtpPrice price={article.price} />
            </div>
        </>
    );
};


export default AtpCartItem;

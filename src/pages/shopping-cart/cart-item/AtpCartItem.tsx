import React, { FC } from 'react';
import AtpLink from '../../../components/link/AtpLink';
import AtpPrice from '../../../components/price/AtpPrice';
import AtpText from '../../../components/text/AtpText';
import { Article } from '../../../models/article.model';
import './AtpCartItem.scss'
import { VscAdd, VscChromeMinimize } from 'react-icons/vsc'

type Props = {
    article: Article;
    addToCart: (clickedItem: Article) => void;
    removeFromCart: (id: string) => void;
};

export const AtpCartItem: FC<Props> = ({ article, addToCart, removeFromCart }) => {

    return (
        <>
            <div className='atp-item'>
                <img className='atp-item__photo' src={article.images[0].url} alt={article.images[0].title} />
                <div className='atp-item__description'>
                    <AtpLink to={''}>{article.brand}</AtpLink>
                    <AtpText>{article.articleName}</AtpText>
                    <AtpText>SIZE: L </AtpText>
                    <div className='atp-item__description__buttons'>
                        <VscChromeMinimize onClick={() => removeFromCart(article.articleCode)} />
                        <AtpText className='atp-item__description__buttons__amount'>{article.amount}</AtpText>
                        <VscAdd onClick={() => addToCart(article)} />
                    </div>
                </div>
            </div>
            <div className='atp-item__price'>
                <AtpPrice price={(article.amount * article.price)} />
                <span className='atp-item__price__text' onClick={() => removeFromCart(article.articleCode)}>Remove</span>
            </div>
        </>
    );
};


export default AtpCartItem;

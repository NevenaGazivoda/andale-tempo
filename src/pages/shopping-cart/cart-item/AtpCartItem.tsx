import React, { FC } from 'react';
import AtpLink from '../../../components/link/AtpLink';
import AtpPrice from '../../../components/price/AtpPrice';
import AtpText from '../../../components/text/AtpText';
import { strings } from '../../../constants/strings';
import { CartItem } from '../../../models/cart-item.model';
import './AtpCartItem.scss'

type Props = {
    article: CartItem;
    removeFromCart: (id: string) => void;
};

export const AtpCartItem: FC<Props> = ({ article, removeFromCart }) => {

    return (
        <>
            <div className='atp-item'>
                <img className='atp-item__photo' src={article.image.url} alt={article.image.title} />
                <div className='atp-item__description'>
                    <AtpLink to={''}>{article.brand}</AtpLink>
                    <AtpText>{article.articleName}</AtpText>
                    <AtpText>{strings.SIZE} {article.size.label} </AtpText>
                </div>
            </div>
            <div className='atp-item__price'>
                <AtpPrice price={(article.price)} />
                <span className='atp-item__price__text' onClick={() => removeFromCart(article.articleCode)}>{strings.REMOVE}</span>
            </div>
        </>
    );
};


export default AtpCartItem;

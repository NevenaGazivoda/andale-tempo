import React, { FC, PropsWithChildren } from 'react';
import AtpLink from '../link/AtpLink';
import AtpPrice from '../price/AtpPrice';
import './AtpArticleCard.scss'

type Props = PropsWithChildren<{
    image: { url: string, title: string };
    brand: string;
    price: number;
}>

export const AtpArticleCard: FC<Props> = ({ image, brand, price }) => (
    <div className='atp-card'>
        <AtpLink to="/article"><img className='atp-card__photo' src={image.url} alt={image.title} /></AtpLink>

        <div className='atp-card__info'>
            <AtpLink className='atp-card__link' to="/article">{brand}</AtpLink>
            <AtpPrice price={price} />
        </div>
    </div>
);


export default AtpArticleCard;
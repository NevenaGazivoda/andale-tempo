import React, { FC, PropsWithChildren } from 'react';
import AtpText from '../text/AtpText';
import './AtpPrice.scss'

type Props = PropsWithChildren<{
    price: number;
    newPrice?: number;
    discount?: number;
}>

export const AtpPrice: FC<Props> = ({ price, newPrice, discount }) => {

    return (
        <AtpText>
            {newPrice ? <>
                <span>${newPrice} USD</span>
                <span className='row'></span>
                <span className='atp-price'>${price} USD</span>
                <span className='atp-price--grey'>{discount}% OFF</span>
            </> : <span>${price} USD</span>}
        </AtpText>
    )
};


export default AtpPrice;

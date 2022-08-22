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
        <AtpText>${price} USD
            {newPrice && <>
                <span className='atp-price'>${newPrice} USD</span>
                <span className='atp-price--grey'>{discount}% OFF</span>
            </>}
        </AtpText>
    )
};


export default AtpPrice;

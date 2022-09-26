import React, { FC, PropsWithChildren } from 'react';
import AtpText from '../text/AtpText';
import './AtpPrice.scss';
import classNames from 'classnames';

type Props = PropsWithChildren<{
  price: number;
  newPrice?: number;
  discount?: number;
  className?: string;
}>;

export const AtpPrice: FC<Props> = ({ price, newPrice, discount, className }) => {
  return (
    <AtpText>
      {newPrice ? (
        <>
          <span className={classNames('atp-price-main', className)}>${newPrice} USD</span>
          <span className="atp-price">${price} USD</span>
          <span className="atp-price--grey">{discount}% OFF</span>
        </>
      ) : (
        <span>${price} USD</span>
      )}
    </AtpText>
  );
};

export default AtpPrice;

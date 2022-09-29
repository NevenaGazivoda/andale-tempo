import React, { FC } from 'react';
import AtpLink from '../../../components/link/AtpLink';
import AtpPrice from '../../../components/price/AtpPrice';
import AtpText from '../../../components/text/AtpText';
import { strings } from '../../../constants/strings';
import { CartItem } from '../../../models/cartItem.model';
import './AtpCartItem.scss';

type Props = {
  article: CartItem;
  removeFromCart: (cartItemIndex: number) => void;
  cartItemIndex: number;
};

export const AtpCartItem: FC<Props> = ({ article, cartItemIndex, removeFromCart }) => {
  return (
    <>
      <div className="atp-item">
        <AtpLink to={`/article/${article.articleCode}`}>
          <img className="atp-item__photo" src={article.image.url} alt={article.image.title} />
        </AtpLink>

        <div className="atp-item__description">
          <AtpLink to={`/article/${article.articleCode}`}>{article.brand}</AtpLink>
          <AtpText>{article.articleName}</AtpText>
          <AtpText>
            {strings.SIZE} {article.size.label}
          </AtpText>
        </div>
        <div className="atp-item__price">
          <AtpPrice
            className="atp-item__price__block"
            price={article.price}
            newPrice={article.newPrice}
            discount={article.discount}
          />
          <span className="atp-item__price__remove" onClick={() => removeFromCart(cartItemIndex)}>
            {strings.REMOVE}
          </span>
        </div>
      </div>
    </>
  );
};

export default AtpCartItem;

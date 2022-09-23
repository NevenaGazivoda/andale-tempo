import React, { FC, useState } from 'react';
import AtpButton from '../../components/button/AtpButton';
import AtpPrice from '../../components/price/AtpPrice';
import AtpText from '../../components/text/AtpText';
import { strings } from '../../constants/strings';
import { CartItem } from '../../models/cart-item.model';
import './AtpShoppingCart.scss';
import AtpCartItem from './cart-item/AtpCartItem';

export const AtpShoppingCart: FC = () => {
  const [cart, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[]
  );

  const handleRemoveFromCart = (id: string) => {
    let cartCopy = [...cart];

    cartCopy = cartCopy.filter((item) => item.articleCode != id);

    setCartItems(cartCopy);

    const cartString = JSON.stringify(cartCopy);
    localStorage.setItem('cart', cartString);
    window.dispatchEvent(new Event('storage'));
  };

  const calculateTotal = (items: CartItem[]) =>
    items.reduce((accumulator: number, item) => accumulator + item.price, 0);

  return (
    <div className="atp-page atp-shopping">
      <div className="atp-shopping__cart">
        <AtpText>{strings.SHOPPING_CART}</AtpText>
        <div className="atp-shopping__cart__table">
          <div className="atp-shopping__cart__header">
            <AtpText className="atp-shopping__cart__header__grey">{strings.ITEM}</AtpText>
            <AtpText className="atp-shopping__cart__header__grey">{strings.TOTAL}</AtpText>
          </div>
          <ul className="atp-shopping__cart__list">
            {cart.map((item) => (
              <li key={item.articleCode} className="atp-shopping__cart__list__item">
                <AtpCartItem article={item} removeFromCart={handleRemoveFromCart} />
              </li>
            ))}
          </ul>
        </div>
        <div className="atp-shopping__cart__total">
          <b>
            <AtpText>{strings.ORDER_TOTAL}</AtpText>
          </b>
          <b>
            <AtpPrice price={calculateTotal(cart)}></AtpPrice>
          </b>
        </div>
      </div>

      <div className="atp-shopping__checkout">
        <AtpText>CHECKOUT</AtpText>
        <AtpText>Enter your email to login or continue to checkout as a guest.</AtpText>
        <label htmlFor="email">Email address:</label>
        <input type="email" name="email" className="atp-shopping__checkout__email"></input>
        <AtpButton className="atp-shopping__checkout__email__button">Proceed to checkout</AtpButton>
      </div>
    </div>
  );
};

export default AtpShoppingCart;

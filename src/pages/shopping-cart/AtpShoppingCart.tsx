import React, { FC, useState } from 'react';
import AtpButton from '../../components/button/AtpButton';
import AtpText from '../../components/text/AtpText';
import { strings } from '../../constants/strings';
import { CartItem } from '../../models/cart-item.model';
import './AtpShoppingCart.scss';
import AtpCartItem from './cart-item/AtpCartItem';

export const AtpShoppingCart: FC = () => {
  const [cart, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[]
  );

  const handleRemoveFromCart = (id: string, size: string) => {
    let cartCopy = [...cart];

    cartCopy = cartCopy.filter((item) => {
      return item.size.value !== size || item.articleCode !== id;
    });

    setCartItems(cartCopy);

    const cartString = JSON.stringify(cartCopy);
    localStorage.setItem('cart', cartString);
    window.dispatchEvent(new Event('storage'));
  };

  const calculateTotal = (items: CartItem[]) =>
    items.reduce(
      (accumulator: number, item) => accumulator + (item.newPrice ? item.newPrice : item.price),
      0
    );

  return (
    <div className="atp-page atp-shopping">
      <div className="atp-shopping__cart">
        <AtpText>{strings.SHOPPING_CART}</AtpText>
        <div className="atp-shopping__cart__table">
          <div className="atp-shopping__cart__header">
            <AtpText className="atp-shopping__cart__header--left">{strings.ITEM}</AtpText>
            <AtpText className="atp-shopping__cart__header--right">{strings.TOTAL}</AtpText>
          </div>
          <div className="atp-shopping__cart__list">
            {cart.map((item, index) => (
              <div key={item.articleCode + index} className="atp-shopping__cart__list__item">
                <AtpCartItem article={item} removeFromCart={handleRemoveFromCart} />
              </div>
            ))}
          </div>
        </div>
        <div className="atp-shopping__cart__total">
          <>
            <b>
              <AtpText className="atp-shopping__cart__total--order">{strings.ORDER_TOTAL}</AtpText>
              <AtpText className="atp-shopping__cart__total--price">
                ${calculateTotal(cart)} USD
              </AtpText>
            </b>
          </>
        </div>
      </div>

      <div className="atp-shopping__checkout">
        <AtpText>{strings.CHECKOUT}</AtpText>
        <AtpText>{strings.ENTER_EMAIL}</AtpText>
        <label htmlFor="email">{strings.EMAIL_ADDRESS}</label>
        <input type="text" name="email" className="atp-shopping__checkout__input"></input>
        <AtpButton className="atp-shopping__checkout__button">
          {strings.PROCEED_TO_CHECKOUT}
        </AtpButton>
      </div>
    </div>
  );
};

export default AtpShoppingCart;

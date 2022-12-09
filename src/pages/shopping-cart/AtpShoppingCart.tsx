import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import AtpButton from '../../components/button/AtpButton';
import AtpLink from '../../components/link-atp/AtpLink';
import AtpText from '../../components/text/AtpText';
import { strings } from '../../constants/strings';
import { CartItem } from '../../models/cartItem.model';
import ShoppingCartStore from '../../utilities/ShoppingCartStore';
import './AtpShoppingCart.scss';
import AtpCartItem from './cart-item/AtpCartItem';

type Props = {
  store: ShoppingCartStore;
};

export const AtpShoppingCart: FC<Props> = observer(({ store }) => {
  const handleRemoveFromCart = (articleIndex: number) => {
    store.removeFromCart(articleIndex);
  };
  const brands = ['OFF-WHITE', 'THEORY', 'MONCLER', 'AMIRI', 'BOSS', 'CARTIER'];

  return (
    <div className="atp-page atp-shopping">
      {store.cart.length > 0 ? (
        <>
          <div className="atp-shopping__cart">
            <AtpText>{strings.SHOPPING_CART}</AtpText>
            <div className="atp-shopping__cart__table">
              <div className="atp-shopping__cart__header">
                <AtpText className="atp-shopping__cart__header__item atp-shopping__cart__header__item--left">
                  {strings.ITEM}
                </AtpText>
                <AtpText className="atp-shopping__cart__header__item atp-shopping__cart__header__item--right">
                  {strings.TOTAL}
                </AtpText>
              </div>
              <div className="atp-shopping__cart__list">
                {store.cart.map((cartItem: CartItem, index: number) => (
                  <div
                    key={cartItem.articleCode + index}
                    className="atp-shopping__cart__list__item"
                  >
                    <AtpCartItem
                      article={cartItem}
                      cartItemIndex={index}
                      removeFromCart={handleRemoveFromCart}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="atp-shopping__cart__total">
              <b>
                <AtpText className="atp-shopping__cart__total--order">
                  {strings.ORDER_TOTAL}
                </AtpText>
                <AtpText className="atp-shopping__cart__total--price">
                  ${store.calculateTotalSum(store.cart)} USD
                </AtpText>
              </b>
            </div>
          </div>

          <div className="atp-shopping__checkout">
            <AtpText>{strings.CHECKOUT}</AtpText>
            <AtpText>{strings.ENTER_EMAIL}</AtpText>
            <label htmlFor="email">{strings.EMAIL_ADDRESS}</label>
            <input
              type="text"
              name="email"
              className="atp-input atp-shopping__checkout__input"
            ></input>
            <AtpButton className="atp-shopping__checkout__button">
              {strings.PROCEED_TO_CHECKOUT}
            </AtpButton>
          </div>
        </>
      ) : (
        <div className="atp-shopping__empty-cart">
          <AtpText>{strings.EMPTY_SHOPPING_CART_ERROR}</AtpText>
          <div className="atp-shopping__empty-cart__links">
            <AtpLink className="atp-shopping__empty-cart__links__link" to="/">
              {strings.SHOP + ' ' + strings.MENSWEAR}
            </AtpLink>
            <AtpLink className="atp-shopping__empty-cart__links__link" to="/">
              {strings.SHOP + ' ' + strings.WOMENSWEAR}
            </AtpLink>
            <AtpLink className="atp-shopping__empty-cart__links__link" to="/">
              {strings.SHOP + ' ' + strings.EVERYTHING_ELSE}
            </AtpLink>
          </div>
          <AtpText>{strings.POPULAR_BRANDS}</AtpText>
          <div className="atp-shopping__empty-cart__list">
            {brands.map((brand, index) => (
              <AtpLink key={brand + index} className="atp-shopping__empty-cart__list__link" to={''}>
                {brand}
              </AtpLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

export default AtpShoppingCart;

import React, { FC } from 'react';
import { ARTICLES_DATA } from '../../assets/dummy-data/atp-data';
import AtpLink from '../../components/link/AtpLink';
import AtpPrice from '../../components/price/AtpPrice';
import AtpText from '../../components/text/AtpText';
import { strings } from '../../constants/strings';
import { Article } from '../../models/article.model';
import './AtpShoppingCart.scss'
import AtpCartItem from './cart-item/AtpCartItem';

type Props = {
    cartItems: Article[];
    addToCart: (clickedItem: Article) => void;
    removeFromCart: (id: string) => void;
};

export const AtpShoppingCart: FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
    const calculateTotal = (items: Article[]) =>
        items.reduce((accumulator: number, item) => accumulator + item.amount! * item.price, 0);

    return (
        <div className='atp-page atp-shopping-cart'>
            <AtpText>{strings.SHOPPING_CART}</AtpText>
            <div className='atp-shopping-cart__table'>
                <div className='atp-shopping-cart__header'>
                    <AtpText className='atp-shopping-cart__header__grey'>ITEM</AtpText>
                    <AtpText className='atp-shopping-cart__header__grey'>TOTAL</AtpText>
                </div>
                <ul className='atp-shopping-cart__list'>
                    {cartItems.map(item => (
                        <li key={item.articleCode} className='atp-shopping-cart__list__item'>
                            <AtpCartItem
                                article={item}
                                addToCart={addToCart}
                                removeFromCart={removeFromCart}
                            />
                        </li>
                    ))}

                </ul>
            </div>
            <div className='atp-shopping-cart__total'>

                <b><AtpText>Order Total</AtpText></b>
                <b><AtpPrice price={calculateTotal(cartItems)}></AtpPrice></b>
            </div>
        </div>
    );
};


export default AtpShoppingCart;

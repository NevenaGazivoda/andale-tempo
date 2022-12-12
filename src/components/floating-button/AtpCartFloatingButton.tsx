/* eslint-disable @typescript-eslint/ban-ts-comment */
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import ShoppingCartStore from '../../utilities/ShoppingCartStore';
import './AtpCartFloatingButton.scss';

type Props = {
  store: ShoppingCartStore;
};

@observer
//@ts-ignore
export default class AtpCartFloatingButton extends Component<Props> {
  render() {
    const { totalCartItems, totalSum } = this.props.store;
    return (
      <Link to="shopping-cart" className="floating-button">
        <MdShoppingCart />

        <span className="cart-value"> ${totalSum}</span>

        <span className="badge"> {totalCartItems} </span>
      </Link>
    );
  }
}

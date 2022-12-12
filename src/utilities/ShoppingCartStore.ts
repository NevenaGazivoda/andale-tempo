import { action, computed, makeObservable, observable } from 'mobx';
import { CartItem } from '../models/cartItem.model';

class ShoppingCartStore {
  cart = JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[];

  constructor() {
    makeObservable(this, {
      cart: observable,
      totalCartItems: computed,
      totalSum: computed,
      addToCart: action,
      removeFromCart: action,
    });
  }

  get totalCartItems() {
    return this.cart.length;
  }

  addToCart(clickedItem: CartItem) {
    const cartItem = {
      brand: clickedItem.brand,
      articleName: clickedItem.articleName,
      articleCode: clickedItem.articleCode,
      size: clickedItem.size,
      price: clickedItem.price,
      newPrice: clickedItem.newPrice,
      discount: clickedItem.discount,
      image: clickedItem.image,
    };

    this.cart.push(cartItem);

    localStorage.setItem('cart', JSON.stringify(this.cart));

    window.dispatchEvent(new Event('storage'));
  }

  removeFromCart = (articleIndex: number) => {
    this.cart.splice(articleIndex, 1);
    const cartString = JSON.stringify(this.cart);

    localStorage.setItem('cart', cartString);

    window.dispatchEvent(new Event('storage'));
  };

  get totalSum() {
    return this.cart.reduce(
      (accumulator: number, cartItem: CartItem) =>
        accumulator + (cartItem.newPrice ? cartItem.newPrice : cartItem.price),
      0
    );
  }
}

export default ShoppingCartStore;

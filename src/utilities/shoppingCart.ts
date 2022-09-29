import { CartItem } from "../models/cartItem.model";

export const cart = JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[]

export const addToCart = (clickedItem: CartItem) => {
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
  
      cart.push(cartItem);
  
      localStorage.setItem('cart', JSON.stringify(cart));
  
      window.dispatchEvent(new Event('storage'));
}

export const removeFromCart = (articleIndex: number) => {
    cart.splice(articleIndex, 1);
    const cartString = JSON.stringify(cart);

    localStorage.setItem('cart', cartString);
    
    window.dispatchEvent(new Event('storage'));
}

export const calculateTotal = (cartItems: CartItem[]) =>
    cartItems.reduce(
      (accumulator: number, cartItem: CartItem) =>
        accumulator + (cartItem.newPrice ? cartItem.newPrice : cartItem.price),
      0
    );
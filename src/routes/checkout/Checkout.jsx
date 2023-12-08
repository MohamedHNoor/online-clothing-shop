import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/Cart.context';
import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div>
      <h1>I am the checkout page</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { name, quantity, id } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <br />
              <span onClick={() => removeItemFromCart(cartItem)}>
                Decrement
              </span>
              <br />
              <span onClick={() => addItemToCart(cartItem)}>Increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;

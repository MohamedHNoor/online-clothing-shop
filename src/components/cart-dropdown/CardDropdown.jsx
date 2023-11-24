import React, { useContext } from 'react';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import { CartContext } from '../../contexts/Cart.context';
import './cart-dropdown.styles.scss';

const CardDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CardDropdown;

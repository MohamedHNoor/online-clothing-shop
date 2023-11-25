import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import { CartContext } from '../../contexts/Cart.context';
import './cart-dropdown.styles.scss';

const CardDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const checkoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={checkoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CardDropdown;

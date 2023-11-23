import { Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/User.context';
import { CartContext } from '../../contexts/Cart.context';
import { signOutUser } from '../../utils/firebase/Firebase';
import { CartIcon, CardDropdown } from '../../components';
import './Navigation.styles.scss';
import ShopLogo from '../../assets/shopLogo.svg';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className='navigation'>
        <Link to='/' className='logo-container'>
          <img src={ShopLogo} alt='Online Clothing Shop' className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link to='/shop' className='nav-link'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link to='/auth' className='nav-link'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CardDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;

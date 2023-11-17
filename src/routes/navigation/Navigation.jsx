import { Outlet, Link } from 'react-router-dom';
import './Navigation.styles.scss';
import ShopLogo from '../../assets/shopLogo.svg';

const Navigation = () => {
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
          <Link to='/sign-in' className='nav-link'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;

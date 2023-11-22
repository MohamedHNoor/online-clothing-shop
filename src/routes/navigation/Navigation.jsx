import { Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/User.context';
import { signOutUser } from '../../utils/firebase/Firebase';
import './Navigation.styles.scss';
import ShopLogo from '../../assets/shopLogo.svg';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

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
            <span className='nav-link' onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link to='/auth' className='nav-link'>
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;

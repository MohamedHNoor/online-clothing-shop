import { SignupForm, SigninForm } from '../../components';
import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SigninForm />
      <SignupForm />
    </div>
  );
};

export default Authentication;

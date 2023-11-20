import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/Firebase';
import { SignupForm } from '../../components';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google popup</button>
      <SignupForm />
    </div>
  );
};

export default SignIn;

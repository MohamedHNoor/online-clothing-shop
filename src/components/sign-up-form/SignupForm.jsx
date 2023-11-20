import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/Firebase';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignupForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Password no dot match');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use.');
      } else {
        console.log('User creation encountered an error', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor=''>Display Name</label>
          <input
            type='text'
            required
            name='displayName'
            value={displayName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor=''>Email</label>
          <input
            type='email'
            required
            name='email'
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor=''>Password</label>
          <input
            type='password'
            required
            name='password'
            value={password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor=''>Confirm Password</label>
          <input
            type='password'
            required
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>SIGN UP</button>
      </form>
    </div>
  );
};

export default SignupForm;

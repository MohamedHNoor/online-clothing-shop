import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDKKCF1KFQzhmeEWxfeY-Un5J6UWqPSviM',
  authDomain: 'online-clothing-shop-db-147b2.firebaseapp.com',
  projectId: 'online-clothing-shop-db-147b2',
  storageBucket: 'online-clothing-shop-db-147b2.appspot.com',
  messagingSenderId: '211393410100',
  appId: '1:211393410100:web:5c3bdc0df3a9cc69ea8661',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

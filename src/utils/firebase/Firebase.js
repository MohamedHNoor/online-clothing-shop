import { initializeApp } from 'firebase/app';
import {
  getAuth,
  // signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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
const firebaseApp = initializeApp(firebaseConfig); // eslint-disable-line

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// firestore database
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // when user data does not exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  // when user data exists
  return userDocRef;
};

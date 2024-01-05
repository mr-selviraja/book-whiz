import { useState } from 'react';
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  db,
  collection,
  addDoc,
} from '../config/firebaseConfig';

export const useSignup = () => {
  // State to hold signup error
  const [signupError, setSignupError] = useState('');
  // State to hold signup pending status
  const [isSignupPending, setIsSignupPending] = useState(false);

  const signup = async (name, email, password) => {
    setIsSignupPending(true);
    setSignupError('');

    //   Validate input values
    if (!name || !email || !password) {
      setIsSignupPending(false);
      setSignupError('Please fill all the fields to complete signup');
      return { success: false };
    }

    // Signup the user inside try-catch
    try {
      // Signup user using firebase auth service
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Throw error upon unsuccessful signup
      if (!userCredential) throw new Error('Could not complete the Signup!');

      // Extract user property from the created user
      const user = userCredential.user;

      // Add displayName to the user
      if (user) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
      }

      // Get a reference to the firestore DB
      const userCollectionRef = collection(db, 'users');

      // Add new user to the users collection in firestore DB
      const newUserDoc = await addDoc(userCollectionRef, {
        userId: user.uid,
        name: user.displayName,
        email: user.email,
        joinedOn: new Date(),
        orders: [],
        cart: [],
        wishlist: [],
      });

      // Perform the below operatioins only if adding document is successful
      if (newUserDoc) {
        // update state
        setIsSignupPending(false);
        setSignupError(null);
      }

      return { success: true };
    } catch (err) {
      setSignupError(err.message);
      setIsSignupPending(false);
      console.log('SIGNUP ERROR: ', err.message);

      return {
        success: false,
        error: err.message,
      };
    }
  };

  return { signupError, isSignupPending, signup };
};

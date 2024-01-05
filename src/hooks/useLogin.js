import { useState } from 'react';
import { auth, signInWithEmailAndPassword } from '../config/firebaseConfig';
import { useDispatch } from 'react-redux';
import { closeAuthModal, setToken, setUser } from '../redux/authSlice';

export const useLogin = () => {
  // State to hold login errors
  const [loginError, setLoginError] = useState(null);

  //   State to hold login pending status
  const [isLoginPending, setIsLoginPending] = useState(false);

  // Dispatcher function
  const dispatch = useDispatch();

  const login = async (email, password) => {
    setLoginError(null);
    setIsLoginPending(true);

    // signin the user
    try {
      // Validate login input
      if (!email || !password) {
        setIsLoginPending(false);
        throw new Error('Please provide credentials to login');
      }

      // Login user using firebase-auth utility function
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // dispatch setUser action passing the userId
      dispatch(setUser(userCredential.user.uid));

      // dispath setToken action passing the accessToken
      dispatch(setToken(userCredential.user.accessToken));

      // Close modal on successful signup
      dispatch(closeAuthModal());

      // update state
      setIsLoginPending(false);
      setLoginError(null);
    } catch (error) {
      setLoginError(error.message);
      setIsLoginPending(false);
      console.log('LOGIN ERROR: ', error.message);
    }
  };

  return { login, loginError, isLoginPending };
};

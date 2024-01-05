import React, { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import { useLogin } from '../hooks/useLogin';
import { useDispatch, useSelector } from 'react-redux';
import { closeAuthModal } from '../redux/authSlice';

function Modal() {
  // State to hold current auth page
  const [activePage, setActivePage] = useState('login');

  // Extract properties from auth hooks
  const { signup, signupError, isSignupPending } = useSignup();
  const { login, loginError, isLoginPending } = useLogin();

  // Extract auth modal status from authentication state
  const { isAuthModalActive } = useSelector((state) => state.auth);

  // Dispatcher function
  const dispatch = useDispatch();

  // State to hold the form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to toggle active auth page
  const toggleActivePage = () =>
    activePage === 'login' ? setActivePage('signup') : setActivePage('login');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // If the current page is signup, don't move to login until signup is successful
    if (activePage === 'signup') {
      const signupResponse = await signup(name, email, password);
      signupResponse.success && login(email, password);
    }

    // If the current page is login
    if (activePage === 'login') login(email, password);
  };

  return (
    <section
      className={`fixed z-50 inset-0 overflow-y-auto ${
        isAuthModalActive ? 'block' : 'hidden'
      }`}
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'
    >
      <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
        <div
          className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
          aria-hidden='true'
        ></div>

        <div className='relative inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 sm:max-w-lg sm:w-full px-10 py-8'>
          <form onSubmit={handleSubmit} className='bg-white'>
            <h3 className='text-center font-bold text-xl mb-3 uppercase'>
              {activePage === 'login' ? 'Login' : 'Sign Up'}
            </h3>

            {activePage === 'signup' && (
              <input
                type='text'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}

            <input
              type='email'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3'
              placeholder='Enter e-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type='password'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className='btn-lg btn-primary w-full mb-3'>
              {activePage === 'login'
                ? isLoginPending
                  ? 'Logging In'
                  : 'Login'
                : isSignupPending
                  ? 'Signing Up'
                  : 'Sign Up'}
            </button>

            <p className='text-center'>
              <span className='mr-3'>
                {activePage === 'login' ? 'Not a member?' : 'Already a member?'}
              </span>

              <span
                onClick={toggleActivePage}
                className='text-primary cursor-pointer'
                href='#'
              >
                {activePage === 'login' ? 'Signup' : 'Login'}
              </span>
            </p>

            {
              <p className='text-center text-orange-500 mt-4'>
                {activePage === 'login' ? loginError : signupError}
              </p>
            }
          </form>

          <button
            onClick={() => dispatch(closeAuthModal())}
            className='absolute top-[-6px] right-[-6px] bg-primary text-white py-2 px-4 rounded-full'
          >
            x
          </button>
        </div>
      </div>
    </section>
  );
}

export default Modal;

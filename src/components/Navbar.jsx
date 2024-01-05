import React, { useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { showAuthModal } from '../redux/authSlice';
import { resetUser } from '../redux/authSlice';

const Navbar = () => {
  // State to show/hide navigation bar on devices below md
  const [isNavActive, setIsNavActive] = useState(false);

  // Extract user authentication status to show/hide nav-links
  const { isAuthenticated } = useSelector((state) => state.auth);

  // Dispatcher function
  const dispatch = useDispatch();

  return (
    <>
      <nav className='bg-lightFg py-5 shadow-md'>
        <div
          className={`holder md:flex md:items-center md:justify-between ${
            !isAuthenticated && 'flex justify-between'
          }`}
        >
          <div className='flex justify-between items-center'>
            <Link to='/' className='inline-flex items-center gap-x-2 md:mb-0'>
              <img width={150} src='/book-whiz-logo.svg' alt='book whiz logo' />
              <h1 className='hidden'>BookWhiz</h1>
            </Link>

            <button
              className={`inline-block md:hidden text-xl ${
                !isAuthenticated && 'hidden'
              }`}
              onClick={() => setIsNavActive(!isNavActive)}
            >
              {isNavActive ? <FaXmark /> : <FaBars />}
            </button>
          </div>

          {isAuthenticated ? (
            <ul
              className={`bg-lightFg py-4 md:py-0 pl-4 sm:pl-16 md:pl-0 md:flex md:items-center md:gap-x-16  md:z-auto md:static absolute  w-full left-0 md:w-auto md:opacity-100 transition-all ease-in duration-500 ${
                isNavActive ? 'top-[64px] opacity-1' : 'top-[-100%] opacity-0'
              }`}
            >
              <li className='mb-4 md:pb-0 md:mb-0'>
                <NavLink to='/cart' className='hover:text-primary duration-500'>
                  Cart
                </NavLink>
              </li>

              <li className='mb-4 md:pb-0 md:mb-0'>
                <NavLink
                  to='/profile'
                  className='hover:text-primary duration-500'
                >
                  Profile
                </NavLink>
              </li>

              <li className='mb-4 md:pb-0 md:mb-0'>
                <NavLink
                  to='/checkout'
                  className='hover:text-primary duration-500'
                >
                  Checkout
                </NavLink>
              </li>

              <li className='md:pb-0 md:mb-0'>
                <NavLink
                  onClick={() => dispatch(resetUser())}
                  className='hover:text-primary duration-500'
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          ) : (
            <button
              className='btn-sm rounded-full btn-primary uppercase text-lightFg'
              onClick={() => dispatch(showAuthModal())}
            >
              Login
            </button>
          )}
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;

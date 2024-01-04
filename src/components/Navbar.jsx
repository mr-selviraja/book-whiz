import React, { useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  return (
    <nav className='bg-lightFg py-5 shadow-md'>
      <div className='holder md:flex md:items-center md:justify-between'>
        <div className='flex justify-between items-center'>
          <a href='#' className='inline-flex items-center gap-x-2 md:mb-0'>
            <img width={150} src='/book-whiz-logo.svg' alt='book whiz logo' />
            <h1 className='hidden'>BookWhiz</h1>
          </a>

          <button
            className='inline-block md:hidden text-xl'
            onClick={() => setIsNavActive(!isNavActive)}
          >
            {isNavActive ? <FaXmark /> : <FaBars />}
          </button>
        </div>

        <ul
          className={`bg-lightFg py-4 md:py-0 pl-4 sm:pl-16 md:pl-0 md:flex md:items-center md:gap-x-16  md:z-auto md:static absolute  w-full left-0 md:w-auto md:opacity-100 transition-all ease-in duration-500 ${
            isNavActive ? 'top-[64px] opacity-1' : 'top-[-100%] opacity-0'
          }`}
        >
          <li className='pb-4 md:pb-0 md:mb-0'>
            <a href='#' className='hover:text-primary duration-500'>
              Cart
            </a>
          </li>

          <li className='pb-4 md:pb-0 md:mb-0'>
            <a href='#' className='hover:text-primary duration-500'>
              Profile
            </a>
          </li>

          <li className='md:pb-0 md:mb-0'>
            <a href='#' className='hover:text-primary duration-500'>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

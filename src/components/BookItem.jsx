import React from 'react';
import { FaRegHeart } from 'react-icons/fa6';

const getDiscountedPrice = (price, discount) => {
  return Math.round(price - price * (discount / 100));
};

function BookItem({ book }) {
  const { coverImg, title, author, price, discount } = book;

  return (
    <li className='bg-lightFg rounded-md shadow-md'>
      <img className='mb-2 mx-auto w-36' src={coverImg} alt='book cover' />
      <div className='p-3'>
        <h3 className='font-accent font-bold text-md'>{title}</h3>

        <h5 className='mb-3'>{author}</h5>

        <div className='flex gap-x-4 mb-3'>
          <p className='font-bold'>Rs.{getDiscountedPrice(price, discount)}</p>

          <p className='line-through'>Rs.{price}</p>

          <p className='text-primary'>{discount}%</p>
        </div>

        <div className='flex gap-x-2 items-center mb-1'>
          <FaRegHeart className='text-3xl cursor-pointer' />
          <button className='btn-lg btn-dark w-full'>Add to Cart</button>
        </div>

        <button className='btn-lg btn-primary w-full'>Buy Now</button>
      </div>
    </li>
  );
}

export default BookItem;

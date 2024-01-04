import React from 'react';

function Hero() {
  return (
    <section className='hero bg-primary py-20'>
      <div className='holder'>
        <h2 className='font-accent font-bold text-lightFg text-4xl mb-1'>
          Discover Your Next Adventure
        </h2>

        <p className='text-lightBg mb-4'>
          Dive into a world of stories and imagination at our book store.
        </p>

        <button className='btn-lg btn-light rounded-full hover:bg-lightBg'>
          Explore Books
        </button>
      </div>
    </section>
  );
}

export default Hero;

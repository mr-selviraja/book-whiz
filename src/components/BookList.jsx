import React from 'react';
import BookItem from './BookItem';

function BookList({ title, categoryBooks }) {
  return (
    <section className='holder py-8'>
      <h2 className='text-xl font-bold font-accent text-dark mb-2 uppercase'>
        {title}
      </h2>

      <ul className='grid grid-cols-1 min-[450px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {categoryBooks &&
          categoryBooks
            .slice(0, 4)
            .map((book, index) => <BookItem key={book.id} book={book} />)}
      </ul>
    </section>
  );
}

export default BookList;

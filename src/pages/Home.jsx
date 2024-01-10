import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import BookList from '../components/BookList';
import { useFirestore } from '../hooks/useFirestore';
import { useDispatch, useSelector } from 'react-redux';
import { setBooks } from '../redux/bookSlice';

function Home() {
  const { fetchCollection } = useFirestore();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);

  useEffect(() => {
    const fetchData = async () => {
      const booksCollection = await fetchCollection('books');
      dispatch(setBooks(booksCollection));
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <section>
      <Hero />

      <BookList title='popular' categoryBooks={books.popular} />

      <BookList title='latest' categoryBooks={books.latest} />

      <BookList title='thriller' categoryBooks={books.thriller} />

      <BookList title='mystery' categoryBooks={books.mystery} />

      <BookList title='science' categoryBooks={books.science} />
    </section>
  );
}

export default Home;

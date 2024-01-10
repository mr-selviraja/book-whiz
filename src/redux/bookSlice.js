import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: {
    popular: [],
    latest: [],
    thriller: [],
    mystery: [],
    science: [],
  },
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action) => {
      // action.payload is an array of books(objects) having category as one of the properties
      action.payload.forEach((book) => {
        // Use switch case to determine the category and push the book into the corresponding category array
        switch (book.category) {
          case 'popular':
            state.books.popular.push(book);
            break;
          case 'latest':
            state.books.latest.push(book);
            break;
          case 'thriller':
            state.books.thriller.push(book);
            break;
          case 'mystery':
            state.books.mystery.push(book);
            break;
          case 'science':
            state.books.science.push(book);
            break;
          default:
            // Handle the default case or log an error for unknown categories
            console.error(`Unknown category: ${book.category}`);
            break;
        }
      });
    },
  },
});

export const { setBooks } = bookSlice.actions;
export default bookSlice.reducer;

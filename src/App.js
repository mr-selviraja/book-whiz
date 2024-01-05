import React from 'react';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Page404 from './pages/Page404';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Modal from './components/Modal';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />

          <Modal />
        </>
      ),
      errorElement: <Page404 />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'cart',
          element: <Cart />,
        },
        {
          path: 'profile',
          element: <Profile />,
        },
        {
          path: 'checkout',
          element: <Checkout />,
        },
      ],
    },
  ]);

  return (
    <div className='min-h-[100vh] bg-lightBg text-darkBg font-regular'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

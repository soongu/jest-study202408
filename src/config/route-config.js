import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Layout from '../pages/Layout';
import ErrorPage from '../pages/ErrorPage';
import About from '../pages/About';
import Contact from '../pages/Contact';
import PostDetail, { loader as postLoader } from '../pages/PostDetail';

// 라우터 설정
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'posts/:postId',
        element: <PostDetail />,
        loader: postLoader,
      },
    ],
  },
]);

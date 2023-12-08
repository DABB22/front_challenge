
//* usaremos Reac-Router-Dom para el proyecto junto con tailwindCSS

import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import Quiz, { loader as preguntasLoader } from './pages/Quiz';
import ErrorPage from './components/ErrorPage';
import ErrorPage404 from './components/ErrorPage404';
import Home from './pages/Home';

//* Definimos las rutas de nuestra app
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorPage />
      },
      {
        path: '/quiz',
        element: <Quiz />,
        loader: preguntasLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/*',
        element: <ErrorPage404 />
      },
    ]
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

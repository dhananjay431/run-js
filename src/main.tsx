import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Test from './pages/Test.tsx';
import T1 from './pages/T1.tsx';
import './index.css';
import '../public/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/test',
    element: <Test />,
    children: [
      {
        path: 't1/:contactId',
        element: <T1 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

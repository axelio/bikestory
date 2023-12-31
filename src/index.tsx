import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './components/ErrorPage';
import OdraNysa from './components/OdraNysa';

const router = createHashRouter([
  {
    path: "/*",
    element: <OdraNysa />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/odranysa",
  //   element: <OdraNysa />
  // }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';

import Root from './pages/Root';
import Welcome from './pages/Welcome';
import Quiz from './pages/Quiz';
import Scores from './pages/Scores';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '', element: <Root />, children: [
      { path: '', element: <Welcome /> },
      { path: 'quiz', element: <Quiz /> },
      { path: 'scores', element: <Scores /> },
      { path: '*', element: <NotFound /> }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

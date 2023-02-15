import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';
import Quiz from './pages/Quiz';
import Root from './pages/Root';
import Scores from './pages/Scores';
import Welcome from './pages/Welcome';

const router = createBrowserRouter([
  {
    path: '/', element: <Root />, children: [
      { path: '', element: <Welcome /> },
      { path: '/quiz', element: <Quiz /> },
      { path: '/scores', element: <Scores /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

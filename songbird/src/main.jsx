import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';

import Root from './pages/Root';
import Welcome from './pages/Welcome';
import Quizlet from './pages/Quizlet';
import Scores from './pages/Scores';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '', element: <Root />, children: [
      { path: '', element: <Welcome /> },
      {
        path: 'quiz', element: <Quizlet />, children: [
          { path: '', element: null, },
          { path: 'warmup', element: null, },
          { path: 'passerines', element: null, },
          { path: 'singers', element: null, },
          { path: 'forest-birds', element: null, },
          { path: 'predators', element: null, },
          { path: 'sea-birds', element: null, },
        ]
      },
      {
        path: 'scores', element: <Scores />, children: [
          { path: '', element: null, },
          { path: 'warmup', element: null, },
          { path: 'passerines', element: null, },
          { path: 'singers', element: null, },
          { path: 'forest-birds', element: null, },
          { path: 'predators', element: null, },
          { path: 'sea-birds', element: null, },
        ]
      },
      { path: '*', element: <NotFound /> }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
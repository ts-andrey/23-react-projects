import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';

import Root from './pages/Root';
import Welcome from './pages/Welcome';
import Quizlet from './pages/Quizlet';
import Scores from './pages/Scores';
import NotFound from './pages/NotFound';
import QuizGreet from './components/quiz/QuizGreet';
import Quiz from './components/quiz/Quiz';

const router = createBrowserRouter([
  {
    path: '', element: <Root />, children: [
      { path: '', element: <Welcome /> },
      {
        path: 'quiz', element: <Quizlet />, children: [
          { path: '', element: <QuizGreet />, },
          { path: 'warmup', element: <Quiz />, },
          { path: 'passerines', element: <Quiz />, },
          { path: 'forest-birds', element: <Quiz />, },
          { path: 'predators', element: <Quiz />, },
          { path: 'sea-birds', element: <Quiz />, },
        ]
      },
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
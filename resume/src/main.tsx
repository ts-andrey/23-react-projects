import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import About from './pages/About';
import CodeSamples from './pages/CodeSamples';
import Projects from './pages/Projects';

import Root from './pages/Root';

const router = createBrowserRouter([
  {
    path: '', element: <Root />, children: [
      { path: 'about', element: <About /> },
      { path: 'projects', element: <Projects /> },
      { path: 'code-samples', element: <CodeSamples /> },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

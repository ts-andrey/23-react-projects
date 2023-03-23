import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import './global.vars.css';

import Root from './pages/Root';

import About from './pages/About';
import CodeSamples from './pages/CodeSamples';
import Projects from './pages/Projects';

const router = createBrowserRouter([
  {
    path: '', element: <Root />, children: [
      { path: '', element: <About /> },
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

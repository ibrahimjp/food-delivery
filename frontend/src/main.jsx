import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, createHashRouter, HashRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Shop from './pages/Shop.jsx';
import Contact from './pages/Contact.jsx';
import Blog from './pages/Blog.jsx';
const router = createHashRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/about',
    element:<About/>
  },{
    path:'/shop',
    element:<Shop/>
  },{
    path:'/contact-us',
    element:<Contact/>
  },
  {
    path:'/blog',
    element:<Blog/>
  }
])
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);

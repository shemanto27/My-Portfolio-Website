import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Home from './pages/Home'
import BlogPage from './pages/BlogPage'
import AddNewBlog from './pages/AddNewBlog'
import Admin from './pages/Admin'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/blog/:id',
    element: <BlogPage />
  },
  {
    path: '/newblog',
    element: <AddNewBlog />
  },
  {
    path: '/admin',
    element: <Admin />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

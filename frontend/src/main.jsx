import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Home from './pages/Home'
import BlogPage from './pages/BlogPage'
import AddNewBlog from './pages/AddNewBlog'

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
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

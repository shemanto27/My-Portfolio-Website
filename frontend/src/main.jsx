import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Layout from './components/Layout'
import Home from './pages/Home'
import BlogPage from './pages/BlogPage'
import AddNewBlog from './pages/AddNewBlog'
import Admin from './pages/Admin'
import Auth from './pages/Auth'



const router = createBrowserRouter([
  { path: "/", element: <Layout />, children: [
      { path: "/", element: <Home /> },
      { path: "/blog/:id", element: <BlogPage /> },
      { path: "/newblog", element: <AddNewBlog /> },
      { path: "/edit-blog/:id", element: <AddNewBlog /> },
      { path: "/admin", element: <Admin /> },
      { path: "/auth/:type", element: <Auth /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

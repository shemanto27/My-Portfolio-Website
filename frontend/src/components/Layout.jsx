import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
  return (
    <div>
      <Navbar/>
      <main className="min-h-screen">
        <Outlet />    
      </main>
    <Footer/>
    </div>
  )
}

export default Layout

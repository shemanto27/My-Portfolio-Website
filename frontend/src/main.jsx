import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar></Navbar>
    <Hero></Hero>
    <Footer></Footer>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar></Navbar>
    <Hero></Hero>
  </StrictMode>,
)

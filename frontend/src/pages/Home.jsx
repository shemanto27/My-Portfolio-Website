import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogsCardsSection from '../components/BlogsCardsSection';

function Home() {
  return (
    <>
      <Navbar></Navbar>
        <Hero></Hero>
        <BlogsCardsSection></BlogsCardsSection>
        <Footer></Footer>
    </>
  )
}

export default Home

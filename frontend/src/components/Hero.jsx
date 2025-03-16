import React from 'react'
import coder_image from '../assets/images/coder_image.webp'


function Hero() {
  return (
    <>
      <div className="hero bg-base-100 h-full flex flex-col justify-center items-center text-center container mx-auto px-4 my-5">
        <div className='flex items-center justify-center flex-wrap'>
          <h1 className="text-5xl font-bold text-[#222222] flex items-center">
            Let's Code and Build! 
          </h1>
          <div><img src={coder_image} alt="coder_image" className="w-12 ml-2" /></div>
        </div>
        <p className="py-6 max-w-2xl">
          A self-taught Full-Stack Machine Learning Engineer skilled with the full AI software life cycle, from understanding business requirements to deployment and monitoring using MLOps practices.
        </p>
      </div>
    </>
  )
}

export default Hero

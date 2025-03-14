import React from 'react'

function Hero() {
  return (
    <>
      <div className="hero bg-base-100 h-full flex flex-col justify-center items-center text-center">
        
        <h1 className="text-5xl font-bold">
          Hi, I'm <span className="text-primary">Bidut Sharkar</span> <span className="text-secondary">Shemanto</span>
        </h1>
        <p className="py-6 max-w-2xl">
          A self-taught Full-Stack Machine Learning Engineer skilled with the full AI software life cycle, from understanding business requirements to deployment and monitoring using MLOps practices.
        </p>
        
      </div>
    </>
  )
}

export default Hero

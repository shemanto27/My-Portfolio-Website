import React from 'react'

function Hero() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen flex flex-col justify-center items-center text-center">
        <div className="flex flex-col items-center mb-4">
          <button className="btn btn-outline mb-2">Available for hire</button>
          <button className="btn btn-outline">Email me <span className="ml-2">✉️</span></button>
        </div>
        <h1 className="text-5xl font-bold">
          Hi, I'm <span className="text-primary">Bidut Sharkar</span> <span className="text-secondary">Shemanto</span>
        </h1>
        <p className="py-6 max-w-2xl">
          A self-taught Full-Stack Machine Learning Engineer skilled with the full AI software life cycle, from understanding business requirements to deployment and monitoring using MLOps practices.
        </p>
        <div className="flex space-x-4">
          <button className="btn btn-primary">Get in touch</button>
          <button className="btn btn-secondary">Download CV <span className="ml-2">⬇️</span></button>
        </div>
      </div>
    </>
  )
}

export default Hero

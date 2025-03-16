import React from 'react'
import love from '../assets/images/love.webp'
import laptop  from '../assets/images/laptop.webp'

function Footer() {
  return (
    <div>
      <footer className="footer sm:footer-horizontal footer-center bg-[#524ff6] text-base-content p-4 border-b-5 border-[#2f29f4]">
        <aside>
          <p className='text-white flex items-center justify-center flex-wrap'>
            Copyright © {new Date().getFullYear()} - Build by Shemanto Sharkar with 
            <span className='flex items-center justify-center'>
            <img src={laptop} alt="laptop" className='w-5 mx-1' /> + 
            <img src={love} alt="love" className='w-5 mx-1'/>
            </span>
          </p>
        </aside>
      </footer>
    </div>
  )
}

export default Footer

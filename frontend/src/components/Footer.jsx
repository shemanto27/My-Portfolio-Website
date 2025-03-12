import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="footer sm:footer-horizontal footer-center bg-black text-base-content p-4">
  <aside>
    <p className='text-white'>Copyright © {new Date().getFullYear()} - Build by Shemanto Sharkar with 💻 + ❤</p>
  </aside>
</footer>
    </div>
  )
}

export default Footer

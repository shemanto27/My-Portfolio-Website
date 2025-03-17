import React, {useEffect, useState} from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const navigate = useNavigate();
  const [logInStatus, setLogInStatus] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      setLogInStatus(false);
    } 
    else {
      setLogInStatus(true);
    };
  }, [])
  return (
    <>
      <div className="navbar bg-[#18354C] shadow-sm ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden bg-[#fbcf4d]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
              <li><a>Blogs</a></li>
              <li><a>Free Tools</a></li>
              <li><a>Books</a></li>
              <li><a href="https://www.linkedin.com/in/shemanto"><FaLinkedin className="h-5 w-5" /> LinkedIn</a></li>
              <li><a href="https://github.com/shemanto27"><FaGithub className="h-5 w-5" /> GitHub</a></li>
              <li className="mb-2"><a className="btn bg-[#E85235] border-[#DD391A] text-white shadow-none" onClick={() => navigate('/auth/register')}>Sign-Up&#10024;</a></li>
              <li><a className="btn bg-[#fbcf4d] border-0 text-black shadow-none" onClick={() => navigate('/auth/login')}>{logInStatus ? 'Login' : 'Logout'}</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-white" onClick={()=> navigate('/')}>Shemanto's Blog</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a className="text-white">Blogs</a></li>
            <li><a className="text-white">Free Tools</a></li>
            <li><a className="text-white">Books</a></li>
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex gap-4">
          <a href="https://www.linkedin.com/in/shemanto" target='_blank' className="btn btn-ghost bg-white">
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a href="https://github.com/shemanto27" target='_blank' className="btn btn-ghost bg-white">
            <FaGithub className="h-5 w-5" />
          </a>
          <a className="btn bg-[#E85235] border-[#DD391A] text-white shadow-none" onClick={() => navigate('/auth/register')}>Sign-Up&#10024;</a>
          <a className="btn bg-[#fbcf4d] border-0 text-black shadow-none" onClick={() => navigate('/auth/login')}>{logInStatus ? 'Login' : 'Logout'}</a>
        </div>
      </div>
    </>
  )
}

export default Navbar

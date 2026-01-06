import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
    <nav className='text-white  flex justify-between  text-2xl ml-10 mt-3'>
      <div className='text-4xl ml-3 mt-1'>AS</div>
        <div className='flex gap-4 mr-10 text-2xl'>
          <a href='https://www.linkedin.com/in/ayush-sharma-a4604b335/'><FaLinkedin/></a>
          <a href='https://github.com/A-y-u-s-h-29'><FaGithub/></a>
          <a href='ayushsharma00123456@gmail.com'><FaEnvelope/></a>
        </div>
    </nav>
    </>
  )
}

export default NavBar
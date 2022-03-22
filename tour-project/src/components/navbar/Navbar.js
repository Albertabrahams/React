import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
    <div>
        <ul className='ul'>
            <li className='li'><a href="#">ABOUT US</a></li>
            <li className='li'><a href="#">FOR YOU</a></li>
            <li className='li'><a href="#">SERVICES</a></li>
            <li className='li'><a href="#">BLOG</a></li>
            <li className='li'><a href="#">VLOG</a></li>
            <li className='li'><a href="#">CONTACT</a></li>
        </ul>
    </div>
  )
}

export default Navbar
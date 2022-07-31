import React from 'react'
import OpenMenu from '@mui/icons-material/Menu';
import CloseMenu from '@mui/icons-material/Close';
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className='navbarContainer'>
        <div className="navbarWrapper">
        <a href=""><h4 className='navTitle'>VSchool</h4></a>
        <ul className="navMenu">
            <li className="navMenuItem"><a href="" className="navMenuItemLink">Home</a></li>
            <li className="navMenuItem"><a href="" className="navMenuItemLink">About</a></li>
            <li className="navMenuItem"><a href="" className="navMenuItemLink">Courses</a></li>
            <li className="navMenuItem"><a href="" className="navMenuItemLink">Contact</a></li>
        </ul>
        <button id='openMenuItem'><OpenMenu/></button>
        <button id='closeMenuItem'><CloseMenu/></button>
    </div>
    </nav>
  )
}

export default Navbar
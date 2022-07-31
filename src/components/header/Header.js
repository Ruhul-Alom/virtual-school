import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='headerContainer'>
        <div className="hederWrapper">
            <div className="headerLeft">
                <h1 className="headerLeftTitle">
                    Grow your skill to advance your career path
                </h1>
                <p className="headerLeftText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eum aut, alias totam architecto quas itaque fugit tempore, similique iure laudantium id porro
                </p>
                <button className='headerLeftButton'>Get Started</button>
            </div>
            <div className="headerRight">
                <div className="headerRightImageContainer">
                    <img src="assets/headerLeft.jpg" alt="" className="headerRightImage" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
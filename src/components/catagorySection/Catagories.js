import React from 'react'
import Catagory from './Catagory'
import'./catagory.css'

const Catagories = () => {
  return (
    <div className='catagories'>
        <div className="catagoryContainer">
            <div className="catagoryLeft">
<h1 className="catagoryLeftTitle">
    Catagories
</h1>
<p className="catagoryText">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, voluptatibus? Provident, ut ipsa, harum fugit perspiciatis a porro modi nihil veniam quia placeat illo repellat dol
</p>
<button className="catagoryButton">Learn More</button>
            </div>
<div className="catagoryRight">
                <div className="catagoryRightWrapper">
                 <Catagory/> 
                </div>
                </div>
        </div>
     
    </div>
  )
}

export default Catagories
import React from 'react'
import './home.css';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar'
import Catagories from '../components/catagorySection/Catagories';
import Courses from '../components/courses/Courses';


const Home = () => {
  return (
    <div className='homeContainer'>
        <Navbar/>
        <Header/>
        <Catagories/>
        <Courses/>
    </div>
  )
}

export default Home
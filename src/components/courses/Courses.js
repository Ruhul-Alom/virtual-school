import React from 'react'
import Course from './Course'
import './courses.css'

const Courses = () => {
  return (
    <div className='courses'>
        <h1 className="CoursesTitle">
            Our Popular Courses
        </h1>
        <div className="coursesWrapper">
            <Course/>
        </div>
    </div>
  )
}

export default Courses
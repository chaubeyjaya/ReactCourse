import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home1 from '../Pages/Home1'
import About1 from '../Pages/About1'
import Contatc1 from '../Pages/Contatc1'
import Navbar from './Navbar'
import Courses from '../Pages/Courses'
import CourseDetail from '../Pages/CourseDetail'

const RealDynamicRouting = () => {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home1/>}/>
         <Route path='/about' element={<About1/>} />
     <Route path='/contact' element={<Contatc1/>} />

<Route path='/course' element={<Courses/>}/>

<Route path='/course/:courseId' element={<CourseDetail/>} />
      </Routes>
    </div>
  )
}

export default RealDynamicRouting

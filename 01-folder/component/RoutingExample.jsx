/**
 * browser router is one of basic and most useful route in react
 * nested routes
 */


import React from 'react'
import { Route,Routes,Link } from 'react-router-dom'
import Home1 from '../Pages/Home1'
import About1 from '../Pages/About1'
import Contatc1 from '../Pages/Contatc1'

const RoutingExample = () => {
  return (
    <div>
        <h1>This is navbar</h1>

        <div>
            <a href="/">Home</a>
            <a href="/about">About</a>
           <Link to='/contact'>Contact</Link>    
        </div>
   <Routes>
    <Route path='/' element={<Home1/>} />
     <Route path='/about' element={<About1/>} />
     <Route path='/contact' element={<Contatc1/>} />
   </Routes>
    </div>
  )
}

export default RoutingExample

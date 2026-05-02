// this is not dynamic routing its simple and nested routing


import React from 'react'
import { Route,Routes,Link } from 'react-router-dom'
import Navbar from './Navbar'
import Home1 from '../Pages/Home1'
import About1 from '../Pages/About1'
import Contatc1 from '../Pages/Contatc1'
import Products from '../Pages/Products'
import Women from '../Pages/Women'
import Men from '../Pages/Men'

const DynamicRouting = () => {
  return (
    <div>
  <Navbar/>
 {/* roter we create us file mai jo file App mai use hogi */}
 <Routes>
    <Route path='/' element={<Home1/>} />
     <Route path='/about' element={<About1/>} />
     <Route path='/contact' element={<Contatc1/>} />
      {/* nestetd routing contatc ke and con wale pe redirect krega */}
      <Route path='/product' element={<Products/>}>
     <Route path='women' element={<Women/>}>Women</Route>
      <Route path='Men' element={<Men/>}>Men</Route>
      </Route>
   </Routes>

    </div>
  )
}

export default DynamicRouting

import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const Products = () => {
  return (
   <>
    <div>
      this is product page
    </div>
    <div>
        <Link to='/product/women'>Women</Link>
         <Link to='/product/men'>Men</Link>
    </div>
    <Outlet/>
   </>
  )
}

export default Products

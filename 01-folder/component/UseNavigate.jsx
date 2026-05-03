/**
 * this is for navigation from one page to another
 * 
 */
import React from 'react'
import { useNavigate } from 'react-router-dom'

const UseNavigate = () => {

  const navigate = useNavigate()

  const changeRoute = () => {
    console.log("Home")
    navigate("/about")  // 👈 change route here
  }

  return (
    <div>
      <button 
        onClick={changeRoute} 
        className='p-6 bg-blue-400 mt-8 ml-6'
      >
        click on me
      </button>
    </div>
  )
}

export default UseNavigate
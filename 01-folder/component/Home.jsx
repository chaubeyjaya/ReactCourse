//function working here
import React from 'react'

const Home = () => {
    function Hello(){
        console.log("hello")
    }
    function yes(){
        console.log("are you typing")
    }
    function textchange(ele){
 console.log(ele.target.value)
    }
  return (
    <div>
      <h1>this is home page</h1>
      <button className='bg-blue-800 text-white w-18 p-7 m-23 text-xl text-wrap flex' onClick={Hello}>click me</button>
      <input type="text" className=' ml-12 p-13 bg-red-400 text-white' onChange={yes}></input>
       <input type="text" className=' ml-12 p-13 bg-red-900 text-white' onChange={textchange}></input>
    </div>
  )
}

export default Home

/**
 * API means data send from backend to frontend
 * connect frontend to backend
 * two way to get data from backend to frontend fetch and Axios
 */



// import React from 'react'

// const ApiCalling = () => {


//     //   async function getData(){
//     //   const response=await  fetch('https://jsonplaceholder.typicode.com/todos/1')
//     //  console.log(response)

//     // }


//     const getData=()=>{
//        fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

//     }
//     console.log(getData)



   
//   return (
//     <div>
     
//       <button className='p-5 mt-12 bg-green-500  '  onClick={getData}>Get Data</button>
//     </div>
//   )
// }

// export default ApiCalling





import axios from 'axios'
import React, { useState } from 'react'

const ApiCalling = () => {
    
const[data,setData]= useState([])

    const getData= async ()=>{
      const response = await axios.get('https://picsum.photos/v2/list');
      setData(response.data)
    }
    
  return (
    <div>
      <button className='p-5 mt-12 bg-green-500  '  onClick={getData}>Get Data</button>
      <div>
        {
            data.map(function(ele,idx) {
            return <h3>hello{ele.author} {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default ApiCalling

/**
 * it help to perform multiple etask side by side road and footpath exam[pel mena struck road pe chlti rhegi to foot path pe se noraml work kr skte hai road pe jane ki need nhi same usefeect dose 
 * ]
 * 
 * react ki rendering process chlti rhegimain road pe useeffect perform work on p=footpath
 * 
 * jab jab state change hoga side by side ye bhi chlega first use of useEffect   this si known as mounting
 */
// import React ,{useEffect, useState} from 'react'


// const UseEffectExamole = () => {
// const [num,setNum ]= useState(0)

//     useEffect(function(){
//         console.log("use effect is running")
//     })
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={()=>{
//         setNum(num+1)
//       }}     className='bg-red-500 p-6 m-5'>Clcik</button>
//     </div>
//   )
// }

// export default UseEffectExamole



//now how we prevent from mounting we use array dependecy onee change in code only []
/**
 * mounting means useeffect chlta rhega jab tak state change hota rhega 
 *  useEffect(function(){
        console.log("use effect is running")
    },[])
 */
import React ,{useEffect, useState} from 'react'


const UseEffectExamole = () => {
const [num,setNum ]= useState(0)

const [num2,setNum2 ]= useState(100)
    useEffect(function(){
        console.log("use effect is running")
    },[num]) //here depend on num
  return (
    <div>
      <h1>num1:{num}</h1>
      <h1>num2:{num2}</h1>
      <button onClick={()=>{
        setNum(num+1)
      }}     className='bg-red-500 p-6 m-5'
      onDoubleClick={()=>{
        setNum2(num2+10)
      }}
      >Clcik</button>
    </div>
  )
}

export default UseEffectExamole

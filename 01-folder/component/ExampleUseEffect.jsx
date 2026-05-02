
//file nemae wrong this is example of usesatte
// import React from 'react'

// const ExampleUseEffect = () => {
//   let a = 10;
//     function update(){
//         console.log(a)
//       a=20;
//       console.log(a)
//     }
//   return (
//     <div>
//         <h1>value of a:{a}</h1>
//       <button onClick={update}>Click</button>
//     </div>
//   )
// }

// export default ExampleUseEffect








// import React ,{useState} from 'react'

// const ExampleUseEffect = () => {
//  const[num,setNum]=useState(10) //here 10 is nital value of num
//  const[name,setName]=useState("jaya")


//  function update(){
  
//    setNum(20)
//    setName("Riya")
//  }
//   return (
//     <div>
//         <h1>value of num:{num}</h1>
//          <h1>name will change:{name}</h1>
//       <button onClick={update}>Click</button>
//     </div>
//   )
// }

// export default ExampleUseEffect




//counter 

// import React, { useState } from 'react'

// const ExampleUseEffect = () => {

//   const [num, setNum] = useState(2)

//   function incupdate() {
//     setNum(num + 1)
//   }

//   function decupdate() {
//     setNum(num - 1)
//   }
//   function jumpbyFive(){
//   setNum(num+5)
//   }

//   return (
//     <div>
//       <h1 className='text-center text-2xl'>value of num: {num}</h1>
//       <button onClick={incupdate} className='border-2 border-black p-4 m-12'>increase</button>
//       <button onClick={decupdate}  className='border-2 border-black p-4 m-12 '>decrease</button>
//             <button onClick={jumpbyFive}  className='border-2 border-black p-4 m-12 '>jump by 5</button>
//     </div>
//   )
// }

// export default ExampleUseEffect



//useState with objex=cet
// import React, { useState } from 'react'

// const ExampleUseEffect = () => {

//   const [num, setNum] = useState({user:"jaya",age:20})  //if here a multiple vale then how we do now see in this example

//   // function btnClicked() {
//   //  console.log(num.user)
//   //  console.log(num.age)
//   // }

//     const btnClicked = ()=> {
//    const newNum ={...num}
//    newNum.user="riya"   //herer we changes
//    console.log(newNum)
//   }

//   return (
//     <div>
//       <h1 className='text-center text-2xl'>{num.user},{num.age}</h1>
//       <button onClick={btnClicked} className='border-2 border-black p-4 m-12'>increase</button>
//      </div>
//   )
// }

// export default ExampleUseEffect


//array
import React, { useState } from 'react'

const ExampleUseEffect = () => {

  const [num, setNum] = useState([10,20,30,40]) //if here a multiple vale then how we do now see in this example


  //   const btnClicked = ()=> {
  //   const newNum    =[...num]
  //   newNum.push(99)
  //   setNum(newNum)
  // }

    const btnClicked = ()=> {
    const newNum    =[...num]
    newNum.push(99)
    setNum(newNum)
  }

  return (
    <div>
      <h1 className='text-center text-2xl'>{num}</h1>   
      <button onClick={btnClicked} className='border-2 border-black p-4 m-12'>increase</button>
     </div>
  )
}

export default ExampleUseEffect
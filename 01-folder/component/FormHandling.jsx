import React from 'react'

const FormHandling = () => {

const submitHandle=()=>{

}

  return (
    <div>
      <form className='m-8' onSubmit={(e)=>{
        e.preventDefault()   //form will not reload   known as form handling
        submitHandle()
      }}>
        <input type="text" placeholder="enter your name"  className='border-2 p-12'></input><br></br>
        <button className='bg-red-500 mt-12'>Submit</button>
      </form>
    </div>
  )
}

export default FormHandling

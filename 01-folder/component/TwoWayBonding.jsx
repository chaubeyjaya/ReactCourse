/**
 * [title ,subtitle ]   these two are react thhing
 * so if we want to write any thing thta shold be handle by react
 * text box hai three thing 1 value ,placeholder a nd third is onchange function 
 * title will set value in value 
 * then onchange function will send that value to settitle
 */


import React, { useState } from 'react'

const TwoWayBonding = () => {

    const [title, setTitle] = useState('')

    const submitHandle = (e) => {
        e.preventDefault()
        console.log("form submitted by", title)
        setTitle('')
    }

    return (
        <div>
            <form className='m-8' onSubmit={submitHandle}>
                <input
                    type="text"
                    placeholder="enter your name"
                    className='border-2 p-12'
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />
                <br />
                <button className='bg-red-500 mt-12'>Submit</button>
            </form>
        </div>
    )
}

export default TwoWayBonding
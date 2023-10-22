import React from 'react'
import { useState } from 'react'

export default function Input(props) {
    const [text,setText]=useState("");
    const handleInp=()=>{
        setText(text)
        props.city(text)
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const inputStyle={
        border:"none",
        backgroundColor:"rgb(210, 210, 210)",
        borderBottom:"2px solid black"
    }
    const btnStyle={
        padding:"10px 26px",
        backgroundColor:"lightgreen",
        border:"2px solid black",
        color:"black"
    }
  return (
    <>
    <div className='container-fluid'>
    <div className='row'>
    <div className='col-sm-12 text-center'>
        <input type="text" style={inputStyle} placeholder='Enter City here' className="m-3" onChange={handleOnChange}/>
        <button className='btn btn-primary' onClick={handleInp} style={btnStyle}>Enter</button>
    </div>
    </div>
    </div>
    </>
  )
}

import React from 'react'
import style from "./style.module.css"
const SquareComponent = (props) => {
    const classes =  props.className ? `${style.square123 } ${props.className}` : style.square123;
   

  return (
    <div >
      <span className= {classes}  onClick={props.onClick} >{props.state} </span>
    </div>
  )
}

export default SquareComponent

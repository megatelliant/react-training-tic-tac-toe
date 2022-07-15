import React from 'react'
import "./Box.css"

export const Box = ({value, onClick}) => {
    const style = value == "X" ? "box x" : "box o";
   // console.log(style, value, "hello");
  return (
    <div>
        <button className={style} onClick={onClick} key={Math.random()} >{value}</button>
    </div>
  )
}

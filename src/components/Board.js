import React from 'react'
import { Box } from './Box'
import "./Board.css"

export const Board = ({board, onClick}) => {
  //console.log("onclicccic", onClick);
  return (
    <div className='board'>
        {board.map((value, index) => {
            return <Box value={value} onClick={() => value == null ?  onClick(index) : null}  />
        })}
    </div>
  )
}
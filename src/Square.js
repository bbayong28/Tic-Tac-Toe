import React from 'react'

const Square = ({value, onSquareClick}) => {

  return (
    <div className='Square'>
      <button className='square' onClick={onSquareClick}>
        {value}
      </button>
    </div>
  )
}

export default Square
import React from 'react'

export default function RegularButton({ Children ,  handleClick}) {
  return (
    <button
      onClick={handleClick} 
      className = 'bg-light m-2 p-2 rounded-full text-lg text-dark'
    >
        {Children}
    </button>
  )
}


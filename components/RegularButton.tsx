import {PropsWithChildren} from 'react'

export interface ComponentProp{
  handleClick : ()=> void
}

export default function RegularButton({ children ,  handleClick} : PropsWithChildren<ComponentProp>) {
  return (
    <button
      onClick={handleClick} 
      className = 'bg-light m-2 p-2 rounded-full text-lg text-dark'
    >
        {children}
    </button>
  )
}


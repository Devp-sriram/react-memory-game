import './App.css'
import { useState } from 'react'
import Form from '../components/Form.tsx'
import MemoryCard from '../components/MemoryCard.tsx'


export default function App() {

const [isGameOn,setIsGameOn] = useState(false)


  function startGame(){
    setIsGameOn(true)
  }

  function turnCard(){
    console.log("Memo card cliked")
  }

  return (
    <>
    <main className ='bg-dark p-4 flex justify-center items-start h-screen w-screen'>
        <div className=' w-1/3 flex flex-col justify-center items-center'>

            <h1 className='text-3xl p-2 bold text-light'>Memory</h1>
            <div className='w-full flex h-1/2 text-3xl'>
            {!isGameOn && <Form handleSubmit = {startGame}/>}
            {isGameOn && <MemoryCard handleClick={turnCard}/>}
            </div>
        </div>
    </main> 
    </>
  )
}

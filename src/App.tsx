import './App.css'
import { useState } from 'react'


export default function App() {

const [isGameOn,setIsGameOn] = useState(false)


  function startGame(e : any){
    e.preventDefault();
    setIsGameOn(true)
  }

  function turnCard(){
    console.log("Memo card cliked")
  }

  return (
    <>
    <main className ='bg-dark p-4 flex justify-center items-start h-screen w-screen'>
        <div className='flex flex-col justify-center items-center'>

            <h1 className='text-3xl p-2 bold text-light'>Memory</h1>
            <div className='p-2 gap-2'>
            {!isGameOn && <button 
                      onClick = {(e)=>startGame(e)}
                      className = 'bg-light m-2 p-2 rounded-full text-lg text-dark'
                      >
                      game on</button>}
            {isGameOn && <button 
                      onClick={turnCard}
                      className = 'bg-light m-2 p-2 rounded-full text-lg text-dark'
                      >
                      turn card</button>}
            </div>
        </div>
    </main> 
    </>
  )
}


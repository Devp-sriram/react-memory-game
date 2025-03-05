import './App.css'
import {FormEventHandler, useEffect , useState } from 'react'
// import dotenv from 'dotenv'
import Form from '../components/Form.tsx'
import MemoryCard from '../components/MemoryCard.tsx'

// dotenv.config();

export default function App() {


useEffect(()=>{
    // startGame()
},[])
 {/*
async function fetchData(url : string ){

     const response = await fetch(url)
  
      if(!response.ok){
          console.log('fetch failed');
      }

    const result = await response.json();

    return result
} */}



const [isGameOn,setIsGameOn] = useState(false)

async function startGame(e : HTMLFormElement){
    e.preventDefault();
     const response = await fetch(`https://emoji-api.com/emojis?access_key=${import.meta.env.VITE_EMOJI_API}`)  
      if(!response.ok){
          console.log('fetch failed');
      }

    const result = await response.json();

    console.log(result[0].character)
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

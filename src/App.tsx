import './App.css'
import {useEffect , useState } from 'react'
import Form from '../components/Form.tsx'
import MemoryCard from '../components/MemoryCard.tsx'


export default function App() {


{/*useEffect(()=>{
    const result = fetchData()
    console.log(result)
},[])

async function fetchData(url : string ){

     const response = await fetch(url)
  
      if(!response.ok){
          console.log('fetch failed');
      }

    const result = await response.json();

    return result
} */}



const [isGameOn,setIsGameOn] = useState(false)


async function startGame(){
     const response = await fetch('https://api.watchmode.com/v1/releases/?apiKey=NCmmmV6njcyc6tI4mPQhS0AAt6Eei0Q5A7MXDBQl')  
      if(!response.ok){
          console.log('fetch failed');
      }

    const result = await response.json();

    console.log(result)  
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

import React ,{ useState } from "react"


export default function Memory() {

  const [gridSize,setGridSize] = useState<number>(4);
  const [cards,setcards] = useState([]);
  const [flipped,setflipped] = useState([]);
  const [solved,setSolved] = useState<boolean>(false);
  const [won,setWon] = useState<boolean>(false);


  function handleGridSizeChange(e :React.ChangeEvent<HTMLInputElement>){
    let size = parseInt(e.target.value)
    if(size >= 2 && size <=10) setGridSize(size)
  }

  function initGame(){
  
  }
  
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen bg-grey-100 p-4">

      <h1 className="text-3xl font-bold mb-6">Memory game</h1>
      {/*input*/}
      <div className="mb-4" >
          <label htmlFor="gridSize" className="font-bold mr-2">Grid for : (max 10)</label>
          <input 
            type = 'number'
            id  = 'gridSize'
            min = '2'
            max = '10'
            value = {gridSize}
            onChange= {handleGridSizeChange}
            className="border-2 rounded border-grey-300 p-2"
          />
      </div>
      {/*game borad*/}
      <div>
          
      </div>
      {/*result*/}
      {/*reset*/}

    </div>

  )
}


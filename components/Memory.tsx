import React ,{ useState ,useEffect } from "react"

interface cards{
    id : Number,
    num : Number,
}

export default function Memory() {



  const [gridSize,setGridSize] = useState<number>(4);
  const [cards,setcards] = useState<cards[]>([]);
  const [flipped,setflipped] = useState([]);
  const [solved,setSolved] = useState<boolean>(false);
  const [won,setWon] = useState<boolean>(false);

  useEffect(()=>{
      initGame()
  },[gridSize])

  function handleGridSizeChange(e :React.ChangeEvent<HTMLInputElement>){
    let size = parseInt(e.target.value)
    if(size >= 2 && size <=10) setGridSize(size)
  }

  function initGame(){
    const size = gridSize*gridSize; // 16
    const pairs = Math.floor(size/2); // 8
    const numbers = [...Array(pairs).keys()].map((n)=> n + 1);
    const shuffledCards = [...numbers,...numbers]
                          .sort(()=> Math.random() - 0.5)
                          .slice(0,size)
                          .map((num,idx) =>({id:idx ,num}))

    setcards(shuffledCards)
    setflipped([])
    setSolved(false)
    setWon(false)
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
      <div className={`grid gap-2 mb-4` }
      style ={{
        gridTemplateColoums : `repeat(${gridSize})`
      }}>
      {cards.map(card =>{
          return <div key ={card.id}>
                  {card.num}
                </div>
      })}
      </div>

      {/*result*/}
      {/*reset*/}

    </div>

  )
}


import React ,{ useState ,useEffect, ReactNode ,Key, SetStateAction } from "react"

interface cards{
    id : Key,
    num : ReactNode,
}

export default function Memory() {



  const [gridSize,setGridSize] = useState<number>(4);
  const [cards,setcards] = useState<cards[]>([]);
  const [flipped,setflipped] = useState<Key[]>([]);
  const [solved,setSolved] = useState<Key[]>([]);
  const [disabled,setDisabled] = useState<boolean>(false);
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
    setSolved([])
    setWon(false)
  }

  function cheackMatch(secondId : Key){
    const [firstId] : Key[]= flipped

    const firstIndex = Number(firstId);
    const secondindex = Number(secondId);
    if(cards[firstIndex].num === cards[secondindex].num){
      setSolved([...solved,firstId,secondId])
      setflipped([]);
      setDisabled(false);
    }else{
      setTimeout(()=>{
        setflipped([]);
        setDisabled(false);
      },1000)
    }
  }

  function handleClick(id : Key){
    if(disabled || won) return 

    if(flipped.length === 0){
      setflipped([id]  as SetStateAction<typeof flipped>)
      return;
    }

    if(flipped.length === 1){
      setDisabled(true);
      if(id !== flipped[0]){
        setflipped([...flipped,id]  as SetStateAction<typeof flipped>)
        // match logic
        cheackMatch(id)
      }else{
        setflipped([]);
        setDisabled(false);
      }
    }
  }

  function isFlipped(id : Key): Boolean{
      return (flipped as Key[]).includes(id) || (solved as Key[]).includes(id) 
  }

  function isSolved(id:Key): Boolean{
    return (solved as Key[]).includes(id) 
  }
  
  useEffect(()=>{
      if(solved.length === cards.length && cards.length > 0){
           setWon(true);  
      }
  },[solved , cards])
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">

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
            style={{
              gridTemplateColumns : `repeat(${gridSize},minmax(0,1fr))`,
              width: `min(100%,${gridSize * 5}rem)`
            }}>
      {cards.map(card =>{
          return <div key ={card.id}
                      onClick={()=>handleClick(card.id)}
                      className={`aspect-square flex justify-center items-center 
                                  text-xl font-bold rounded-lg cursor-pointer 
                                  transition-all duration-300 
                                  ${isFlipped(card.id)
                                      ? isSolved(card.id)? 
                                        "bg-green-500 text-white":"bg-blue-500 text-white"
                                      :"bg-gray-300 text-gray-400"}`}>

                  {isFlipped(card.id) ? card.num :"?"}
                </div>
      })}
      </div>

      {/*result*/}
      {
        won &&(
          <div className=" mt-4 text-4xl font-bold text-green-600 animate-bounce"   >
              You won!
          </div>
        )
      }
      {/*reset*/}
          <button 
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            onClick={initGame}
          >
            { won ?'Play again':'reset'}
          </button>
    </div>

  )
}


import {ComponentProp} from './RegularButton'

export default function MemoryCard({handleClick}:ComponentProp){
  
  const emojiArr = ['🐶', '🐷', '🐙', '🐛', '🐵', '🐶', '🐷', '🐙', '🐛', '🐵']
  
  const emojiLi = emojiArr.map((emoji,index)=>{
      return <li key={index} className='list-none'>
              <button 
                onClick={handleClick}
                className='bg-light text-dark border-e-black border-2 rounded-xl cursor-pointer'  
              >
                  {emoji}
              </button>
            </li>
  })

  return <ul className='w-full grid grid-cols-5 gap-2'>{emojiLi}</ul>
}


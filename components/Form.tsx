import RegularButton from './RegularButton'

export interface ComponentProp{
  handleSubmit : ()=> void
}

export default function Form({handleSubmit}:ComponentProp) {
  return (
    <form className='flex flex-col gap-2 bg-light text-dark rounded-xl' >
      <RegularButton handleClick={handleSubmit}>
        Start Game
      </RegularButton>
    </form>
  )
}

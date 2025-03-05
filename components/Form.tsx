import RegularButton from './RegularButton'

export interface ComponentProp{
handleSubmit : () =>void
}

export default function Form({handleSubmit}:ComponentProp) {
  return (
      <RegularButton handleClick={handleSubmit}>
        Start Game
      </RegularButton>
  )
}

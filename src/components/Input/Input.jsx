import React from 'react'

function Input({ addGuess, gameFinished }) {
  const [userInput, setUserInput] = React.useState('')

  return (
    <form
      className='guess-input-wrapper'
      onSubmit={e => {
        e.preventDefault()
        if (userInput.length === 0) return
        console.log(userInput)
        addGuess(userInput)
        setUserInput('')
      }}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        disabled={gameFinished}
        id='guess-input'
        type='text'
        value={userInput}
        onChange={e => {
          const upperCaseText = e.target.value.toLocaleUpperCase()
          setUserInput(upperCaseText)
        }}
        maxLength={5}
        pattern='[A-Z]{5}'
        title='The world should have a minimum and maximum length of 5'
      />
    </form>
  )
}

export default Input

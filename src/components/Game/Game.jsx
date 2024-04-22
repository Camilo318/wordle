import React from 'react'
import Input from '../Input/Input'
import Guesses from '../Guesses/Guesses'
import { sample } from '../../utils'
import { WORDS } from '../../data'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [userGuesses, setUserGuesses] = React.useState([])
  return (
    <>
      <Guesses guesses={userGuesses} />
      <Input
        addGuess={guess => {
          const newGuesses = [
            ...userGuesses,
            { word: guess, id: crypto.randomUUID() }
          ]
          setUserGuesses(newGuesses)
        }}
      />
    </>
  )
}

export default Game

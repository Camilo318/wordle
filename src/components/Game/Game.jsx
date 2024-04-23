import React from 'react'
import Input from '../Input/Input'
import Guesses from '../Guesses/Guesses'
import { sample } from '../../utils'
import { WORDS } from '../../data'
import { checkGuess } from '../../game-helpers'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [userGuesses, setUserGuesses] = React.useState([])
  const getResults = word => checkGuess(word, answer)
  return (
    <>
      <Guesses guesses={userGuesses} getResults={getResults} />
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

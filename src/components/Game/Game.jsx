import React from 'react'
import Input from '../Input/Input'
import Guesses from '../Guesses/Guesses'
import { sample } from '../../utils'
import { WORDS } from '../../data'
import { checkGuess } from '../../game-helpers'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import Keyboard from '../Keyboard/Keyboard'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })
const getResults = word => checkGuess(word, answer)

function Game() {
  const [userGuesses, setUserGuesses] = React.useState([])
  const [gameWon, setGameWon] = React.useState(false)
  const gameLost =
    userGuesses.length >= NUM_OF_GUESSES_ALLOWED && !gameWon

  const currentGuesses = userGuesses.map(guess =>
    getResults(guess.word)
  )

  return (
    <>
      <Guesses guesses={currentGuesses} />
      <Input
        gameFinished={gameWon || gameLost}
        addGuess={guess => {
          if (guess === answer) {
            setGameWon(true)
          }

          const newGuesses = [
            ...userGuesses,
            { word: guess, id: crypto.randomUUID() }
          ]
          setUserGuesses(newGuesses)
        }}
      />

      <Keyboard currentGuesses={currentGuesses} />

      {gameLost && (
        <div className='sad banner'>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}

      {gameWon && (
        <div className='happy banner'>
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {userGuesses.length} guesses</strong>.
          </p>
        </div>
      )}
    </>
  )
}

export default Game

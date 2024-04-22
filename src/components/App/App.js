import { useState } from 'react'
import Game from '../Game'
import Header from '../Header'
import Input from '../Input/Input'
import Guesses from '../Guesses/Guesses'

function App() {
  const [userGuesses, setUserGuesses] = useState([])
  return (
    <div className='wrapper'>
      <Header />

      <div className='game-wrapper'>
        <Game />
        <Guesses guesses={userGuesses} />
        <Input
          addGuess={guess => {
            const newGuesses = [
              ...userGuesses,
              { guess: guess, id: crypto.randomUUID() }
            ]
            setUserGuesses(newGuesses)
          }}
        />
      </div>
    </div>
  )
}

export default App

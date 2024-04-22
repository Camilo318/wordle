import { useState } from 'react'
import Game from '../Game'
import Header from '../Header'
import Input from '../Input/Input'

function App() {
  const [userInput, setUserInput] = useState('')
  return (
    <div className='wrapper'>
      <Header />

      <div className='game-wrapper'>
        <Game />

        <Input
          currentValue={userInput}
          setCurrentValue={setUserInput}
        />
      </div>
    </div>
  )
}

export default App

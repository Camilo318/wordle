import React from 'react'
import Guess from '../Guess/Guess'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from '../../utils'

function Guesses({ guesses }) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map(row => {
        const result = guesses[row]
        return <Guess key={row} word={result} />
      })}
    </div>
  )
}

export default Guesses

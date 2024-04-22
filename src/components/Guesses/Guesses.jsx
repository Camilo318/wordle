import React from 'react'
import Guess from '../Guess/Guess'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from '../../utils'

function Guesses({ guesses }) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map(i => (
        <Guess key={i} word={guesses[i]?.word} />
      ))}
    </div>
  )
}

export default Guesses

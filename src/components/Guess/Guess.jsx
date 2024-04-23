import React from 'react'
import { range } from '../../utils'

function Guess({ word }) {
  return (
    <p className='guess'>
      {range(5).map(pos => (
        <span
          key={pos}
          className={word ? `cell ${word[pos].status}` : 'cell'}>
          {word ? word[pos].letter : ''}
        </span>
      ))}
    </p>
  )
}

export default Guess

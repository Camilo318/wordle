import React from 'react'
import { range } from '../../utils'

function Guess({ word }) {
  return (
    <p className='guess'>
      {range(5).map(pos => (
        <span key={pos} className='cell'>
          {word ? word[pos] : ''}
        </span>
      ))}
    </p>
  )
}

export default Guess

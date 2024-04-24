import React from 'react'

const keyboard = [
  { id: 'Q', label: 'Q' },
  { id: 'W', label: 'W' },
  { id: 'E', label: 'E' },
  { id: 'R', label: 'R' },
  { id: 'T', label: 'T' },
  { id: 'Y', label: 'Y' },
  { id: 'U', label: 'U' },
  { id: 'I', label: 'I' },
  { id: 'O', label: 'O' },
  { id: 'P', label: 'P' },
  { id: 'A', label: 'A' },
  { id: 'S', label: 'S' },
  { id: 'D', label: 'D' },
  { id: 'F', label: 'F' },
  { id: 'G', label: 'G' },
  { id: 'H', label: 'H' },
  { id: 'J', label: 'J' },
  { id: 'K', label: 'K' },
  { id: 'L', label: 'L' },
  { id: 'Z', label: 'Z' },
  { id: 'X', label: 'X' },
  { id: 'C', label: 'C' },
  { id: 'V', label: 'V' },
  { id: 'B', label: 'B' },
  { id: 'N', label: 'N' },
  { id: 'M', label: 'M' }
]

function Keyboard({ currentGuesses }) {
  const keyboardLookup = currentGuesses
    .flat()
    .reduce(
      (acc, { letter, status }) => ({ ...acc, [letter]: status }),
      {}
    )

  return (
    <div className='keyboard'>
      {keyboard.map(({ id, label }) => {
        const className = keyboardLookup?.[label]
        return (
          <kbd key={id} className={className}>
            {label}
          </kbd>
        )
      })}
    </div>
  )
}

export default Keyboard

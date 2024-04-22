import React from 'react'

function Input({ currentValue, setCurrentValue }) {
  return (
    <form
      className='guess-input-wrapper'
      onSubmit={e => {
        e.preventDefault()
        if (currentValue.length === 0) return
        console.log(currentValue)
        setCurrentValue('')
      }}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={currentValue}
        onChange={e => {
          const upperCaseText = e.target.value.toLocaleUpperCase()
          setCurrentValue(upperCaseText)
        }}
        maxLength={5}
        pattern='[A-Z]{5}'
        title='The world should have a minimum and maximum length of 5'
      />
    </form>
  )
}

export default Input

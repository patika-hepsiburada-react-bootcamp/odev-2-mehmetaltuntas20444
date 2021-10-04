import React from 'react'

const UsedLetters = ({ wrongLetters, usedLetters }) => {
const allUsedLetter = wrongLetters.concat(usedLetters);
  return (
    <div className="wrong-letters-container">
      <div>
        {allUsedLetter.length > 0 && 
          <p>Used Letters</p>
        }
        {allUsedLetter
          .map((letter, i) => <span key={i}>{letter.toUpperCase()}</span>)
          .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
      </div>
    </div>
  )
}

export default UsedLetters

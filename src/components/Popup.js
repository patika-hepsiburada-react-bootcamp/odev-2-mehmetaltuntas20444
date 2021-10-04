import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers';

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;
  let isWon = checkWin(correctLetters, wrongLetters, selectedWord);

  if( isWon === 'win' ) {
    finalMessage = 'You Saved ' + selectedWord;
    playable = false;
  } else if( isWon === 'lose' ) {
    finalMessage = 'Game Over For ' + selectedWord;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2 className="lost-text">{finalMessage}</h2>
        <h2 className="lost-text">{finalMessageRevealWord}</h2>
        <button onClick={playAgain}>{isWon === 'win' ? 'Next Level' : 'Respawn' }</button>
      </div>
    </div>
  )
}

export default Popup

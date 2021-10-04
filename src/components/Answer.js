import React from 'react';

const Word = ({ selectedWord, correctLetters }) => {
  let answer = selectedWord;
  // const hint = props.answer.hint;
  let pick = correctLetters; 

  let guess = pick.join('');
  let regexp = new RegExp('[^' + guess + ']','g');
  let underscore = answer.replace(regexp, '_');

  return (
    <div className="word">
            {underscore}
    </div>
  )
}

export default Word

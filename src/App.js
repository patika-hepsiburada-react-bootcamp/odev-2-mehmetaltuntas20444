import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Hangman';
import UsedLetters from './components/UsedLetters';
import Word from './components/Answer';
import Popup from './components/Popup';
import Notification from './components/Notification';
import { showNotification as show } from './helpers/helpers';
import GameCharacters from './components/GameCharacters';
import './App.css';


let selectedWord = GameCharacters[Math.floor(Math.random() * GameCharacters.length)];

const App = () => {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([" "]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [usedLetters, setUsedLetters] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toUpperCase();
        if (selectedWord.name.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
            setUsedLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);
    setCorrectLetters([" "]);
    setWrongLetters([]);
    setUsedLetters([]);
    setVisible(false);
    const random = Math.floor(Math.random() * GameCharacters.length);
    selectedWord = GameCharacters[random];
  }

  return (
    <>
      <Header hint={selectedWord.description} visible={visible} />
      {!visible &&
        <a onClick={() => setVisible(true)} class="rainbow-button" alt="Buy Hint"></a>
      }
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <UsedLetters wrongLetters={wrongLetters} usedLetters={usedLetters} />
      </div>
      <Word selectedWord={selectedWord.name} correctLetters={correctLetters} />
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord.name} setPlayable={setPlayable} playAgain={playAgain} />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;

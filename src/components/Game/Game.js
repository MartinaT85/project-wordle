import React from 'react';
import InputGuess from '../InputGuess/InputGuess';
import GuessResult from '../GuessResult/GuessResult';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  function handleSubmitGuess(guess) {
    console.log({ guesses });
    setGuesses(prevGuesses => [...prevGuesses, guess]);
  }
  return (
    <>
      <GuessResult guesses={guesses} />
      <InputGuess handleSubmitGuess={handleSubmitGuess} />
    </>
  )
}

export default Game;

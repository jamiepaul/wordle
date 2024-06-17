import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessList from '../GuessList';
import GuessInput from '../GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuessList] = React.useState([]);

  const handleSubmitGuess = (tentativeGuess) => {
    setGuessList([...guesses, tentativeGuess]);
  }

  const isGameEnd = guesses === NUM_OF_GUESSES_ALLOWED;

  return <div>
    <GuessList guesses={guesses} answer={answer} />
    <GuessInput handleSubmitGuess={handleSubmitGuess} />

  </div>;
}

export default Game;

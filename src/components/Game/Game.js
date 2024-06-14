import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessList from '../GuessList';
import GuessInput from '../GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuessList] = React.useState([ 'STOKE' ]);

  const handleSubmitGuess = (tentativeGuess) => {
    setGuessList([...guesses, tentativeGuess]);
  }

  return <div>
    <GuessList guesses={guesses} />
    <GuessInput handleSubmitGuess={handleSubmitGuess} />
  </div>;
}

export default Game;

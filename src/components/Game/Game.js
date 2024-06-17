import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessList from '../GuessList';
import GuessInput from '../GuessInput';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // statuses: running, won, lost
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guesses, setGuessList] = React.useState([]);

  const handleSubmitGuess = (tentativeGuess) => {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuessList(nextGuesses);

    if (tentativeGuess === answer) {
      setGameStatus('won');
    } else if (NUM_OF_GUESSES_ALLOWED === nextGuesses.length) {
      setGameStatus('lost');
    } else {
      setGameStatus('running');
    }
  }

  return <div>
    <GuessList guesses={guesses} answer={answer} />
    <GuessInput handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus} />
    {gameStatus === 'won' &&
      <WonBanner guessCount={guesses.length} />
    }
    {gameStatus === 'lost' &&
      <LostBanner answer={answer} />
    }
  </div>;
}

export default Game;

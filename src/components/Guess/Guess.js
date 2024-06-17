import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';

  return <span className={className}>
    {letter}
  </span>
}

function Guess({ value, answer }) {
  // if no value, create an empty array for cells
  // const letters = !value ? range(0 , 5) : value.split('');

  const result = checkGuess(value, answer);

  return <p className="guess">
    {/* {letters.map((letter, i) => (
      <span key={i} className="cell">
        {typeof letter === 'string' && letter}
      </span>
    ))} */}
    {range(5).map((cell, i) => (
      <Cell key={i}
        letter={result ? result[i].letter : undefined}
        status={result ? result[i].status : undefined}
        />
    ))}
  </p>;
}

export default Guess;

import React from 'react';

import { range } from '../../utils';

function Guess({ value }) {
  // if no value, create an empty array for cells
  // const letters = !value ? range(0 , 5) : value.split('');

  return <p className="guess">
    {/* {letters.map((letter, i) => (
      <span key={i} className="cell">
        {typeof letter === 'string' && letter}
      </span>
    ))} */}
    {range(5).map((cell, i) => (
      <span key={i} className="cell">
        {value ? value[i] : undefined}
      </span>
    ))}
  </p>;
}

export default Guess;

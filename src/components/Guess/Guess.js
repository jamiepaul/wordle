import React from 'react';

import { range } from '../../utils';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';

  return <span className={className}>
    {letter}
  </span>
}

function Guess({ value }) {
  return <p className="guess">
    {range(5).map((cell, i) => (
      <Cell key={i}
        letter={value ? value[i].letter : undefined}
        status={value ? value[i].status : undefined}
        />
    ))}
  </p>;
}

export default Guess;

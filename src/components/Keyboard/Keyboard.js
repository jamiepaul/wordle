import React from 'react';

import { KEYS } from '../../data';

function getStatusByLetter(validatedGuesses) {
  const statusObj = {};
  // Place all validated letters into a single level array
  const allLetters = validatedGuesses.flat();

  allLetters.forEach(({ letter, status }) => {
    const currentStatus = statusObj[letter];

    if (currentStatus === undefined) {
      statusObj[letter] = status;
      return;
    }

    /* The same letter may have multiple matched statuses.
     * For example, if the answer is "APPLE" and the user guesses
     * "PAPER", then the letter "P" is misplaced (for the first P)
     * and correct (for the second P).
     *
     * Prioritize statuses in this order:
     */
    const STATUS_RANKS = {
      correct: 1,
      misplaced: 2,
      incorrect: 3,
    };

    const currentStatusRank = STATUS_RANKS[currentStatus];
    const newStatusRank = STATUS_RANKS[status];

    if (newStatusRank < currentStatusRank) {
      statusObj[letter] = status;
    }
  });

  return statusObj;
}

function Keyboard({ validatedGuesses }) {
  const statusByLetter = getStatusByLetter(validatedGuesses);

  return <div className="keyboard">
    {KEYS.map((row, i) => (
      <ul key={`row-${i}`} className="key-list">
        {row.map((letter, i) => (
          <li
            key={letter}
            className={`key ${statusByLetter[letter] || ''}`}
          >
            {letter}
          </li>
        ))}
      </ul>
    ))}
  </div>;
}

export default Keyboard;

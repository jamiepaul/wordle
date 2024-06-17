import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import Guess from '../Guess';

/* NOTE: index used for key since the guesses array will never allow for
 * removal of guesses, reordering or manipulation in any way.
 */

function GuessList({ validatedGuesses }) {
  const rows = range(NUM_OF_GUESSES_ALLOWED);

  return <div className="guess-results">
    {rows.map((row, i) => (
      <Guess key={i} value={validatedGuesses[i]} />
    ))}
  </div>;
}

export default GuessList;

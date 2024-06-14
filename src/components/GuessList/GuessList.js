import React from 'react';

/* NOTE: index used for key since the guesses array will never allow for
 * removal of guesses, reordering or manipulation in any way.
 */

function GuessList({ guesses }) {
  return <div className="guess-results">
    {guesses.map((guess, index) => (
      <p className="guess" key={index}>
        {guess}
      </p>
    ))}
  </div>;
}

export default GuessList;

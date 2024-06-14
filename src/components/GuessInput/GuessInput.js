import React from 'react';

/* NOTE: Pattern is ued on input instead of min/maxLength
 * WHY? Transforming the value with .toUpperCase() changes
 * the characters entered and causes minLength check to fail.
 */

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.info({ guess });
    setGuess('');
  }

  return <form
    className="guess-input-wrapper"
    onSubmit={handleSubmit}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input
      required
      pattern="[a-zA-Z]{5}"
      minLength={5}
      maxLength={5}
      title="5 letter word"
      value={guess}
      onChange={(e) => {
        const nextGuess = e.target.value.toUpperCase();
        setGuess(nextGuess);
      }}
      type="text"
      id="guess-input"
      name="guess-input"
    />
  </form>;
}

export default GuessInput;

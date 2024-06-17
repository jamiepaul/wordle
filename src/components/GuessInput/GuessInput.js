import React from 'react';

/* NOTE: Pattern is ued on input instead of min/maxLength
 * WHY? Transforming the value with .toUpperCase() changes
 * the characters entered and causes minLength check to fail.
 */

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
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
      value={tentativeGuess}
      onChange={(e) => {
        const nextGuess = e.target.value.toUpperCase();
        setTentativeGuess(nextGuess);
      }}
      type="text"
      id="guess-input"
      name="guess-input"
      disabled={gameStatus !== 'running'}
    />
  </form>;
}

export default GuessInput;

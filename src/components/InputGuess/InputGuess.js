import React from 'react';

function InputGuess() {
  const [guess, setGuess] = React.useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (guess.length !== 5) {
      alert('Please enter a 5 letter word.');
      return;
    }
    console.log({ guess });
    setGuess('');
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" placeholder='Type your guess' value={guess}
        required
        pattern='[A-Za-z]{5}'
        title='Please enter a 5 letter word.'
        onChange={e => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  )
}

export default InputGuess;

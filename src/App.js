import { useState } from 'react';
import './App.css';

function App() {
  const anecdotes = [
    'if it hurts, do it more often',
    'adding number to a late project makes it later',
    'The first 90 percent of the code accounts for the first 90 percent of the dev time',
    'Any fool can write code',
    'premature optimization is the root of all evil',
    'Debugging is twice as hard as writing the code',
    'programming without an extremely heavy use of console.log'
  ]
  const [ selected, setSelected] = useState(0);
  const selectAnecdote = () => {
    const num = Math.trunc(Math.random() * anecdotes.length);
    setSelected(num);
  }

  return (
    <div className="App">
      <p>{anecdotes[selected]}</p>
      <button onClick={selectAnecdote}>next</button>
    </div>
  );
}

export default App;

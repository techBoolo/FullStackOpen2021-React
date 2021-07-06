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
  const anecdotesLength = anecdotes.length;
  const arr = [...Array(anecdotesLength).keys()];
  const initVotes = {};
  arr.map(k => initVotes[k] = 0)
  
  const [ selected, setSelected] = useState(0);
  const [ votes, setVotes] = useState(initVotes);

  const selectAnecdote = () => {
    const num = Math.trunc(Math.random() * anecdotesLength);
    setSelected(num);
  }

  const handleVote = () => {
    setVotes({...votes, [selected]: votes[selected] + 1})
  }
  return (
    <div className="App">
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={selectAnecdote}>next</button>
    </div>
  );
}

export default App;

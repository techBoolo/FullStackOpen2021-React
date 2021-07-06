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

  // array of length anecdotes.length
  const arr = [...Array(anecdotesLength).keys()];
  const initVotes = {};
  // initialize the votes object with values 0
  arr.map(k => initVotes[k] = 0)
  

  const [ selected, setSelected] = useState(0);
  const [ votes, setVotes] = useState(initVotes);

  // find the max vote and determine its key from the object
  const maxVote = Math.max(...Object.values(votes))
  const maxVoteKey = Object.entries(votes).find(a => a[1] === maxVote)[0]

  const selectAnecdote = () => {
    const num = Math.trunc(Math.random() * anecdotesLength);
    setSelected(num);
  }

  const handleVote = () => {
    setVotes({...votes, [selected]: votes[selected] + 1})
  }
  return (
    <div className="App">
      <h4>Anecdote of the day</h4>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={selectAnecdote}>next</button>
      <h4>Anecdote with most votes</h4>
      <p>{ anecdotes[maxVoteKey]}</p>
      <p>has {maxVote} votes</p>
    </div>
  );
}

export default App;

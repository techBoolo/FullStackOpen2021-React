import { useState } from 'react';
import './App.css';

function App() {
  const [ good, setGood ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);
  const [ bad, setBad ] = useState(0);
  const [ total, setTotal ] = useState(0);
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  }
  const handleBad = () => {
    setBad(bad + 1) 
    setTotal(total + 1);
  }
  const handleGood = () => {
    setGood(good + 1) 
    setTotal(total + 1);
  }

  return (
    <div className="App">
      <h4>give feedback</h4> 
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <h4>Statistics</h4>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>Total feedback {total}</p>
      <h4>Average</h4>
      <p>good: {good / total}</p>
      <p>neutral: {neutral / total}</p>
      <p>bad: {-bad / total}</p>
      <p>Positive feedback {(good / total) * 100}%</p>
    </div>
  );
}

export default App;

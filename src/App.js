import { useState } from 'react';
import './App.css';

function App() {
  const [ good, setGood ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);
  const [ bad, setBad ] = useState(0);
  const handleNeutral = () => {
    setNeutral(neutral + 1) 
  }
  const handleBad = () => {
    setBad(bad + 1) 
  }

  return (
    <div className="App">
      <h4>give feedback</h4> 
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <h4>Statistics</h4>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  );
}

export default App;

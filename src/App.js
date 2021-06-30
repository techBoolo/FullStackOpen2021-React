import React, { useState } from 'react';
import './App.css';

const  App = () =>  {
  const [ counter, setCounter ] = useState(0)

  const handleIncClick = () => {
    setCounter(counter + 1);
  }
  const handleDecClick = () => {
    setCounter(prevCounter => prevCounter - 1)
  }

  return (
      <div className='App'>
        { counter }
        <br />
        <button onClick={handleDecClick}>Dec</button>
        <button onClick={() => setCounter(0)}>Reset</button>
        <button onClick={handleIncClick}>Inc</button>
      </div>
    )
}

export default App;

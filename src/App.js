import React, { useState } from 'react';
import './App.css';

const  App = () =>  {
  const [ counter, setCounter ] = useState(0)

  setTimeout(() => setCounter(counter + 1), 1000)

  console.log('rendering...', counter);

  return (
      <div className='App'>
        { counter }
      </div>
    )
}

export default App;

import React, { useState } from 'react';
import Display from './components/Display';
import Button from './components/Button';

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
        <Display counter={counter} />
        <Button 
          handleClick={handleDecClick} 
          text='Dec' 
        />
        <Button handleClick={() => setCounter(0)} text='Reset' />
        <Button handleClick={handleIncClick} text='Inc' />
      </div>
    )
}

export default App;

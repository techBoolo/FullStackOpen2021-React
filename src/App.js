import React, { useState } from 'react';
import Display from './components/Display';
import Button from './components/Button';

import './App.css';

const  App = () =>  {
  const [ left, setLeft ] = useState(0)
  const [ right, setRight ] = useState(0)

  const handleLeftClick = () => {
    setLeft(left + 1);
  }
  const handleRightClick = () => {
    setRight(prevRight => prevRight + 1)
  }

  return (
      <div className='App'>
        <Display counter={left} />
        <Button 
          handleClick={handleLeftClick} 
          text='Left' 
        />
        <Button handleClick={handleRightClick} text='Right' />
        <Display counter={right} />
      </div>
    )
}

export default App;

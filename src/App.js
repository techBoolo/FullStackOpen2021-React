import React, { useState } from 'react';
import Display from './components/Display';
import Button from './components/Button';

import './App.css';

const  App = () =>  {
  const [ clicks, setClicks ] = useState({ left: 0, right: 0 })

  const handleLeftClick = () => {
    setClicks({...clicks, left: clicks.left + 1 });
  }
  const handleRightClick = () => {
    setClicks(prevRight => ({ ...clicks, right: prevRight.right + 1}))
  }

  return (
      <div className='App'>
        <Display counter={clicks.left} />
        <Button 
          handleClick={handleLeftClick} 
          text='Left' 
        />
        <Button handleClick={handleRightClick} text='Right' />
        <Display counter={clicks.right} />
      </div>
    )
}

export default App;

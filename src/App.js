import React, { useState } from 'react';
import Display from './components/Display';
import Button from './components/Button';
import History from './components/History';

import './App.css';

const  App = () =>  {
  const [ clicks, setClicks ] = useState({ left: 0, right: 0 });
  const [ allClicks, setAll ] = useState([]);
  const [value, setValue ] = useState(0);

  const handleLeftClick = () => {
    setClicks({...clicks, left: clicks.left + 1 });
    setAll([...allClicks, 'L'])
  }
  const handleRightClick = () => {
    setClicks(prevRight => ({ ...clicks, right: prevRight.right + 1}))
    setAll([...allClicks, 'R'])
  }

  const setToValue = (newValue) => setValue(newValue)

  return (
      <div className='App'>
        <Display counter={clicks.left} />
        <Button 
          handleClick={handleLeftClick} 
          text='Left' 
        />
        <Button handleClick={handleRightClick} text='Right' />
        <Display counter={clicks.right} />
        <div>
          <History allClicks={allClicks} />
        </div>
        <div>
          { value }
          <Button handleClick={() => setToValue(1000)} text='Thousand' />
          <Button handleClick={() => setToValue(0)} text='Reset' />
          <Button handleClick={() => setToValue(value + 1)} text='Inc' />
        </div>
      </div>
    )
}

export default App;

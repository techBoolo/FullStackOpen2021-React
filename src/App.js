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

  const hello = () => () => console.log("hello");
  const bye = () => {
    return () => console.log("bye")
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
        <div>
          <History allClicks={allClicks} />
        </div>
        <div>
          { value }
          <Button handleClick={hello()} text='hello' />
          <Button handleClick={bye()} text='bye' />
        </div>
      </div>
    )
}

export default App;

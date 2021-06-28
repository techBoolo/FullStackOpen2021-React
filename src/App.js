import React from 'react';
import './App.css';

const Hello = () => {
  return (
      <div>
        <p>Hello world</p>
      </div>
    )
}

const  App = () =>  {

  return (
      <div className='App'>
        <h1>Greeting</h1>
        <Hello />
        <Hello />
      </div>
    )
}

export default App;

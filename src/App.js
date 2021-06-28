import React from 'react';
import './App.css';

function App() {
  console.log("Components can contain any valid javascript code");
  const now = new Date();
  const a = 10;
  const b = 20;

  return React.createElement('div', { className: 'App' }, 
      React.createElement('p', null, "Hello world, it is ", now.toString()),
      React.createElement('p', null, a, ' plus ', b, ' is ',
        React.createElement('span', {className: 'spanBlue'}, a+b)
      )
    ) 
}

export default App;

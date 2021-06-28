import React from 'react';
import './App.css';

const Hello = (props) => {
  return (
      <div>
        <p>Hello { props.name }</p>
      </div>
    )
}

const Hello2 = (props) => {
  return (
      <div>
        <p>Hello { props.name } you are { props.age } years old.</p>
      </div>
    )
}
const  App = () =>  {

  return (
      <div className='App'>
        <h1>Greeting</h1>
        <Hello name='Geo'/>
        <Hello name='Daisy'/>
        <Hello2 name='Will' age='34' />
      </div>
    )
}

export default App;

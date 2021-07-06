import { useState } from 'react';
import './App.css';

function App() {
  const [ people, setPeople ] = useState([ { name: "Arto Hellas", number: '040-123456' } ])
  const [ name, setName ] = useState('');
  const [ number, setNumber ] = useState('');

  const processName = (name) => {
    return name.split(/\s+/).join(' ').trim();
  }
  const handleSubmit = (ev) => {
    ev.preventDefault();
    if(people.find(person => processName(person.name).toLowerCase() === processName(name).toLowerCase())){
      alert(`${name} is already added to phonebook`)
      setName('');
    }else{ 
      setPeople([...people, { name: processName(name), number }])
      setName('');
      setNumber('');
    }
  }
  const handleNameChange = (ev) => {
    setName(ev.target.value); 
  }
  const handleNumberChange = (ev) => {
    setNumber(ev.target.value); 
  }

  return (
    <div className="App">
      <h4>Pb</h4>
      <form onSubmit={handleSubmit}>
        N: <input value={name} onChange={handleNameChange} /><br />
        Nu: <input value={number} onChange={handleNumberChange} /><br />
        <button type='submit'>add</button>
      </form>
      <h4>Nm</h4>
      <ul>
        {
          people.map(person => <li key={person.name}>{ person.name } {person.number}</li>)
        }
      </ul>
    </div>
  );
}

export default App;

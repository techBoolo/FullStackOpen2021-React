import { useState } from 'react';
import './App.css';

function App() {
  const [ people, setPeople ] = useState([ { name: "Arto Hellas" } ])
  const [ name, setName ] = useState('');

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setPeople([...people, { name }])
    setName('');
  }
  const handleNameChange = (ev) => {
    setName(ev.target.value); 
  }

  return (
    <div className="App">
      <h4>Phonebook</h4>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={handleNameChange} />
        <button type='submit'>add</button>
      </form>
      <h4>Numbers</h4>
      <ul>
        {
          people.map(person => <li key={person.name}>{ person.name }</li>)
        }
      </ul>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';

function App() {
  const [ people, setPeople ] = useState([ { name: "Arto Hellas" } ])
  const [ name, setName ] = useState('');

  const processName = (name) => {
    return name.split(/\s+/).join(' ').trim();
  }
  const handleSubmit = (ev) => {
    ev.preventDefault();
    if(people.find(person => processName(person.name).toLowerCase() === processName(name).toLowerCase())){
      alert(`${name} is already added to phonebook`)
      setName('');
    }else{ 
      setPeople([...people, { name: processName(name) }])
      setName('');
    }
  }
  const handleNameChange = (ev) => {
    setName(ev.target.value); 
  }

  return (
    <div className="App">
      <h4>Pb</h4>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={handleNameChange} />
        <button type='submit'>add</button>
      </form>
      <h4>Nm</h4>
      <ul>
        {
          people.map(person => <li key={person.name}>{ person.name }</li>)
        }
      </ul>
    </div>
  );
}

export default App;

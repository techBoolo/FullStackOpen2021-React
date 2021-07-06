import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [ people, setPeople ] = useState([ 
      { name: "Arto Hellas", number: '040-123456' },
      { name: "ada Lovelace", number: "39-44-5323523" },
      { name: "Dan Abramov", number: "12-34-5678" },
      { name: "Mary Poppend", number: "39-23-64356" }
  ])
  const [ name, setName ] = useState('');
  const [ number, setNumber ] = useState('');
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ filteredPeople, setFilteredPeople ] = useState([]);

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

  const searchPeople = (ev) => {
    setSearchTerm(ev.target.value);
  }
  
  useEffect(() => {
    setFilteredPeople(people.filter(person => processName(person.name).toLowerCase().includes(processName(searchTerm).toLowerCase()))) 
  }, [searchTerm, people])

  return (
    <div className="App">
      <h4>Pb</h4>
      <form onSubmit={handleSubmit}>
        S: <input value={searchTerm} onChange={searchPeople} />
        <h4>Add new</h4>
        N: <input value={name} onChange={handleNameChange} /><br />
        Nu: <input value={number} onChange={handleNumberChange} /><br />
        <button type='submit'>add</button>
      </form>
      <h4>Nm</h4>
      <ul>
        {
          filteredPeople.map(person => <li key={person.name}>{ person.name } {person.number}</li>)
        }
      </ul>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import People from './components/People';
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
      <h4>Phonebook</h4>
        <Filter searchTerm={searchTerm} searchPeople={searchPeople} />
      <h4>Add new</h4>
        <PersonForm 
          handleSubmit={handleSubmit} 
          name={name} 
          number={number} 
          handleNameChange={handleNameChange} 
          handleNumberChange={handleNumberChange} />
      <h4>Numbers</h4>
        <People people={filteredPeople} />
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import People from './components/People';
import './App.css';
const url = 'http://localhost:3002/people';

function App() {
  const [ people, setPeople ] = useState([])
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
      const newPerson = {
        name: processName(name),
        number
      }
      axios
        .post(url, newPerson)
        .then(response => {
          setPeople([...people, response.data])
          setName('');
          setNumber('');
        })
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

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setPeople(response.data); 
      })
  }, [])

  return (
    <div className="App">
      <h4>Pb</h4>
        <Filter searchTerm={searchTerm} searchPeople={searchPeople} />
      <h4>Add new</h4>
        <PersonForm 
          handleSubmit={handleSubmit} 
          name={name} 
          number={number} 
          handleNameChange={handleNameChange} 
          handleNumberChange={handleNumberChange} />
      <h4>Nu</h4>
        <People people={filteredPeople} />
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import People from './components/People';
import * as peopleService from './services/phonebook'
import './App.css';

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
    let person = people.find(person => processName(person.name).toLowerCase() === processName(name).toLowerCase());
    if(person){
      const confirmation = window.confirm(`${name} is already added to phonebook want to change the number?`)
      if(confirmation) {
        person = {...person, number: number }
        peopleService
          .update(person)
          .then(updatedPerson => {
            setPeople(people.map(p => p.id !== updatedPerson.id ? p : updatedPerson))               
          })
        setName('');
        setNumber('');
      }else {
        return
      }
    }else{ 
      const newPerson = {
        name: processName(name),
        number
      }
      peopleService
        .create(newPerson)
        .then(createdPerson => {
          setPeople([...people, createdPerson])
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
    peopleService
      .getAll()
      .then(initialPeople => {
        setPeople(initialPeople); 
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
        <People people={filteredPeople} setPeople={setPeople} />
    </div>
  );
}

export default App;

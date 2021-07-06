import React, { useState, useEffect } from 'react';
import Note from './components/Note';
import axios from 'axios';

import './App.css';

const url = 'http://localhost:3001/notesData';


const  App = () =>  {
  const [ notes, setNotes ] = useState([]);
  const [ content, setContent ] = useState('');
  const [ showAll, setShowAll ] = useState(false);

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setNotes(response.data)
      })
  }, [])

  const generateId = (notes) => {
    const maxId = Math.max(...notes.map(note => note.id));
    return maxId + 1;
  }

  const addNote = (ev) => {
    ev.preventDefault();
    const newNote = {
      content,
      id: generateId(notes),
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
    }
    setNotes([...notes, newNote]);
    setContent('');
  }

  const handleContentChange = (ev) => {
    setContent(ev.target.value);
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  return (
      <div className='App'>
        <form onSubmit={addNote}>
          <input value={content} onChange={handleContentChange} />
          <button type='submit'>add</button>
        </form>
        <h4>Notes</h4>
        <input type='checkbox' onChange={(ev) => setShowAll(ev.target.checked) } /><span>show All</span>
        <ul>
          { notesToShow.map(note =>  <Note key={note.id} note={note} />) }
        </ul>
      </div>
    )
}

export default App;

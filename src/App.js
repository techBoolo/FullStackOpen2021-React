import React, { useState } from 'react';
import Note from './components/Note';

import './App.css';

const notesData = [
  {
    id: 1,
    content: "Html",
    date: new Date(),
    important: true
  },
  {
    id: 2,
    content: "Browser",
    date: new Date(),
    important: false
  },
  {
    id: 3,
    content: "GET and POST",
    date: new Date(),
    important: true
  }
]

const  App = () =>  {
  const [ notes, setNotes ] = useState(notesData);
  const [ content, setContent ] = useState('');
  const [ showAll, setShowAll ] = useState(false);

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

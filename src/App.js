import React, { useState, useEffect } from 'react';
import Note from './components/Note';
import noteService from './services/notes';
import './App.css';

const  App = () =>  {
  const [ notes, setNotes ] = useState([]);
  const [ content, setContent ] = useState('');
  const [ showAll, setShowAll ] = useState(false);

  useEffect(() => {
    noteService 
      .getAll()
      .then(response => {
        setNotes(response.data)
      })
  }, [])

  const addNote = (ev) => {
    ev.preventDefault();
    const newNote = {
      content,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
    }
    noteService
      .create(newNote)
      .then(response => {
        setNotes([...notes, response.data]);
        setContent('');
      })
  }

  const handleContentChange = (ev) => {
    setContent(ev.target.value);
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

    const handleImportanceOf = (id) => {
      const note = notes.find(note => note.id === id);
      const changedNote = {...note, important: !note.important }
      noteService
        .update(id, changedNote)
        .then(response => {
          setNotes(notes.map(note => note.id !== id ? note : response.data))
        })
    }

  return (
      <div className='App'>
        <form onSubmit={addNote}>
          <input value={content} onChange={handleContentChange} />
          <button type='submit'>add</button>
        </form>
        <h4>Notes</h4>
        <input type='checkbox' onChange={(ev) => setShowAll(ev.target.checked) } /><span>show All</span>
        <ul>
          { notesToShow.map(note =>  <Note key={note.id} note={note} handleImportance={() => handleImportanceOf(note.id) } />) }
        </ul>
      </div>
    )
}

export default App;

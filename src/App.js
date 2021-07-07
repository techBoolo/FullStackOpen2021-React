import React, { useState, useEffect } from 'react';
import Note from './components/Note';
import Notification from './components/Notification';
import noteService from './services/notes';
import './App.css';

const  App = () =>  {
  const [ notes, setNotes ] = useState([]);
  const [ content, setContent ] = useState('');
  const [ showAll, setShowAll ] = useState(false);
  const [ message, setMessage ] = useState({});

  useEffect(() => {
    noteService 
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
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
      .then(createdNote => {
        setNotes([...notes, createdNote]);
        setMessage({ message: 'New Note created!', messageType: 'success'})
        setTimeout(() => setMessage({}), 5000)
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
        .then(updatedNote => {
          setNotes(notes.map(note => note.id !== id ? note : updatedNote))
        })
        .catch(error => {
          setMessage({ message: `Note was already removed`, messageType: 'error'})
          setTimeout(() => setMessage({}), 5000)
          setNotes(notes.filter(note => note.id !== id)) 
        });
    }

  return (
      <div className='App'>
        <Notification message={message} />
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

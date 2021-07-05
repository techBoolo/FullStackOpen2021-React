import React from 'react';
import Note from './components/Note';

import './App.css';

const notes = [
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

  return (
      <div className='App'>
        <h4>Notes</h4>
        <ul>
          { notes.map(note =>  <Note key={note.id} note={note} />) }
        </ul>
      </div>
    )
}

export default App;

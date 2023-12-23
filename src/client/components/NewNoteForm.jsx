import React from 'react';
import { useState } from 'react';

function NewNoteForm({ createNote }) {
  const [note, setNote] = useState('');
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        createNote(note);
      }}
    >
      <input
        value={note}
        type='text'
        placeholder='Is this essential?'
        required
        onChange={(event) => setNote(event.target.value)}
      />
      <button type='submit'>Add new note</button>
    </form>
  );
}

export default NewNoteForm;

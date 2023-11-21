import React from 'react';
import { useState } from 'react';

function NewNoteForm({ addNoteToList }) {
  const [note, setNote] = useState('');
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addNoteToList(note);
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

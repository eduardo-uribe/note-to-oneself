import React from 'react';
import List from './List';
import NewNoteForm from './NewNoteForm';

function Note({ items, deleteItem, createNote }) {
  if (items.length >= 7) {
    return (
      <>
        <List items={items} deleteItem={deleteItem} />
      </>
    );
  }

  return (
    <>
      <List items={items} deleteItem={deleteItem} />
      <NewNoteForm createNote={createNote}></NewNoteForm>
    </>
  );
}

export default Note;

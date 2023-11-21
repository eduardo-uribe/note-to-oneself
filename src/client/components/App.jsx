import React, { useEffect, useState } from 'react';
import List from './List.jsx';
import NewNoteForm from './NewNoteForm.jsx';

function App() {
  const [items, setItems] = useState([]);

  useEffect(function () {
    async function readData() {
      try {
        let response = await fetch('http://localhost:1234/list');
        let data = await response.json();
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    }

    readData();
  }, []);

  function addNoteToList(note) {
    setItems([...items, { note: note }]);
  }

  if (items.length >= 7) {
    console.log(items);
    return (
      <>
        <List items={items} />
        {/* <NewNoteForm addNoteToList={addNoteToList}></NewNoteForm> */}
      </>
    );
  }

  return (
    <>
      <List items={items} />
      <NewNoteForm addNoteToList={addNoteToList}></NewNoteForm>
    </>
  );
}

export default App;

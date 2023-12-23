import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './Home';
import Note from './Note';

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

  function createNote(note) {
    let newnote = { note };
    // send a post fetch request to "/create".
    async function postNote() {
      try {
        let response = await fetch('http://localhost:1234/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newnote),
        });
        console.log('DONE.');
        // let data = await response.json();
        // console.log('THIS IS THE RETURNED DATA INSIDE OF CREATENOTE APP.JS');
        // console.log(data);
        // setItems([...items, data]);
      } catch (error) {
        console.log(error);
      }
    }

    postNote();
  }

  function deleteItem(id) {
    setItems(
      items.filter(function (element) {
        return element.id !== id;
      })
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route
          path='/note/'
          element={
            <Note
              items={items}
              createNote={createNote}
              deleteItem={deleteItem}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

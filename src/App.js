import React, { useState } from 'react';
import List from './List.js';

function App() {
  const [items, setItems] = useState([
    { note: 'First note to oneself' },
    { note: 'Second note to oneself' },
    { note: 'Third note to oneself' },
    { note: 'Fourth note to oneself' },
    { note: 'Fifth note to oneself' },
    { note: 'Sixth note to oneself' },
    { note: 'Seventh note to oneself' },
  ]);
  return <List items={items} />;
}

export default App;

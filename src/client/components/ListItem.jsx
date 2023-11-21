import React from 'react';

function ListItem({ item }) {
  return (
    <li>
      <p contentEditable={'true'}>{item.note}</p>
      <button type='button'>remove</button>
    </li>
  );
}

export default ListItem;

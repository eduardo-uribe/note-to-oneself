import React from 'react';

function ListItem({ item }) {
  return (
    <li>
      <p>{item.note}</p>
    </li>
  );
}

export default ListItem;
